// ES6 import using esm

// Next.js
import next from 'next'; // See https://github.com/zeit/next.js/

// Express.js
import express from 'express';

// Express.js middleware:
//import bodyParser from 'body-parser'; // See https://github.com/expressjs/body-parser
//import timeout from 'connect-timeout'; // See https://github.com/expressjs/timeout
import favicon from 'serve-favicon'; // See https://github.com/expressjs/serve-favicon
import morgan from 'morgan'; // See https://github.com/expressjs/morgan

// Node.js APIs
import https from 'https'; // See https://nodejs.org/api/https.html
import http from 'http'; // See https://nodejs.org/api/http.html
import path from 'path'; // See https://nodejs.org/api/path.html
import fs from 'fs'; // See https://nodejs.org/api/fs.html

// Chittawela's routes
import { routes } from '../components/routes/Routes';  

// Client side's API 
//import ClientSideAPI from './ClientSideApi';
import { addSingleSubscriberToList } from './mailchimp';
import { chargeCard } from './omise';
import { getCompleteLocation } from './ipapico';

// Logging
//import { logger } from './helper/logger';

const appUrl = process.env.APP_URL;
const dev = process.env.NODE_ENV !== 'production';
const securePort = 443; 
const port = process.env.PORT || 80;
const ROOT_URL = dev ? `http://localhost:${port}` : appUrl;
const ROOT_URL_SECURE = dev ? `https://localhost:${securePort}` : appUrl;

const certOptions = {
    key: fs.readFileSync(path.resolve('./server/server.key')),
    cert: fs.readFileSync(path.resolve('./server/server.crt'))
};

// Initialize Next.js
const app = next({ dev });
const handle = app.getRequestHandler();

// Create new middleware to serve a favicon
const _favicon = favicon(path.join(__dirname, '', 'favicon.ico'));

// See https://github.com/expressjs/morgan#predefined-formats
const morganFormat = 'dev';
const skipNonErrorMessages = { skip: (req, res) => { return res.statusCode < 400 } }; //{ skip: false };

app.prepare()
    .then(() => {
        const server = express();

        // Create client side API
        // ClientSideAPI.init(server);

        // Use local ssl certificate in development
        // Use express as the requestListener
        const secured = https.createServer(certOptions, server); // https.Server
        const unsecured = http.createServer(server); // http.Server

        secured.listen(securePort, (err) => {
            if (err) throw err;
            console.log(`> Ready on ${ROOT_URL_SECURE}`);
        });

        unsecured.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on ${ROOT_URL}`);
        });

        // Mounting middleware:
        // Force use of https protocol
        server.use( (req, res, next) => {
            if (req.secure) {
                next();
            } else {
                console.log(req.headers.host, req.url);
                res.redirect('https://' + req.headers.host + req.url);
            };
        });

        // Set up the logger middleware
        server.use(morgan(morganFormat, skipNonErrorMessages));

        // Add favicon
        // See https://github.com/expressjs/serve-favicon
        server.use(_favicon)

        // Only parse JSON and only look at requests where the Content-Type header matches the type option. 
        // See https://expressjs.com/en/api.html#express.json
        server.use(express.json());

        /*
        // API
        ClientSideAPI.build('addSingleSubscriberToList');
        ClientSideAPI.build('chargeCard');
        ClientSideAPI.build('getCompleteLocation');
        */

        server.post('/api/v1/public/subscribe', async (req, res) => {    
            const { body } = req.body;
            logger('info', 'server/index.js: body= %j', body);

            try {
                await addSingleSubscriberToList({ body });
            } catch (err) {
                res.json({ error: err.message || err.toString() });
            }
        });

        server.post('/api/v1/omise/charge', async (req, res) => {
            const { body } = req.body;

            try {
                await chargeCard({ body });
            } catch (err) {
                res.json({ error: err.message || err.toString() });
            }
        });

        
        server.get('/api/v1/ipapico/ipv6', async (req, res, next) => {
            const { body } = req.body;

            try {
                await getCompleteLocation({ body });
            } catch (err) {
                res.json({ error: err.message || err.toString() });
            }
        });

        /*
        const haltOnTimeOut = (req, res, next) => {
            if (!req.timedout) next();
        };
        */

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
        
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    }
);

/*
        server.post(Mailchimp, async (req, res) => {    
            const { body } = req.body;

            try {
                await addSingleSubscriberToList({ body });
            } catch (err) {
              res.json({ error: err.message || err.toString() });
            }
        });

        server.post(Omise, async (req, res) => {
            const { body } = req.body;

            try {
                await chargeCard({ body });
            } catch (err) {
                res.json({ error: err.message || err.toString() });
            }
        });

        server.get(Ipapico, timeout('5s'), bodyParser.json(), haltOnTimeOut, async (req, res, next) => {
            const { body } = req.body;

            try {
                await getCompleteLocation({ body });
            } catch (err) {
                res.json({ error: err.message || err.toString() });
            }
        });

        const haltOnTimeOut = (req, res, next) => {
            if (!req.timedout) next();
        };
*/