// ES6 import using esm
import { routes } from './components/routes/Routes';  

const express = require('express');
const next = require('next');
const favicon = require('serve-favicon');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.port || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

// See https://github.com/expressjs/serve-favicon
server.use(favicon(path.join(__dirname, '', 'favicon.ico')));

app.prepare()
    .then(() => {

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
            console.log('> Ready on http://localhost:3000');
        });
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    }
);