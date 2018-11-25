// ES6 import using esm
import { routes } from './components/routes/Routes';  
import express from 'express';
import next from 'next';
import favicon from 'serve-favicon';
import path from 'path';

import { addSingleSubscriberToList } from './lib/api/mailchimp';
import chittawelaConfig from './chittawela.config';
import expressRoutesApis from './lib/api/api.config';

const appUrl = chittawelaConfig.appUrl;
const expressRouteMailchimp = expressRoutesApis.Mailchimp;

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const ROOT_URL = dev ? `http://localhost:${port}` : appUrl;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();
        
        // Add favicon
        // See https://github.com/expressjs/serve-favicon
        server.use(favicon(path.join(__dirname, '', 'favicon.ico')));

        server.use(express.json());

        server.post(expressRouteMailchimp, async (req, res) => {
            const { user } = req.body;

            try {
                await addSingleSubscriberToList({ user });
                res.json({ subscribed: 1 });
            } catch (err) {
              res.json({ error: err.message || err.toString() });
            }
        });

        routes.forEach( (route) => {
            let page = route.path;
            if (page === '/') {
                page="/index";
            }  

            server.get(route.path, (req, res) => {
                app.render(req, res, page);
            });
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on ${ROOT_URL}`);
        });
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    }
);