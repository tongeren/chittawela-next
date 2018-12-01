// ES6 import using esm
import { routes } from '../components/routes/Routes';  
import express from 'express';
import next from 'next';
import favicon from 'serve-favicon';
import path from 'path';
import morgan from 'morgan';

import { addSingleSubscriberToList } from './mailchimp';
import expressRoutesApis from '../lib/api/api.config';

const appUrl = "https://chittawela.herokuapp.com";
const expressRouteMailchimp = expressRoutesApis.Mailchimp;

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const ROOT_URL = dev ? `http://localhost:${port}` : appUrl;

const app = next({ dev });
const handle = app.getRequestHandler();

const _favicon = favicon(path.join(__dirname, '', 'favicon.ico'));

// See https://github.com/expressjs/morgan#predefined-formats
const morganFormat = 'dev';
const skipNonErrorMessages = { skip: (req, res) => { return res.statusCode < 400 } };

app.prepare()
    .then(() => {
        const server = express();
        
        // Set up the logger middleware
        server.use(morgan(morganFormat, skipNonErrorMessages));

        // Add favicon
        // See https://github.com/expressjs/serve-favicon
        server.use(_favicon)

        server.use(express.json());

        // APIs
        server.post(expressRouteMailchimp, async (req, res) => {    
            const { user } = req.body;

            try {
                await addSingleSubscriberToList({ user });
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