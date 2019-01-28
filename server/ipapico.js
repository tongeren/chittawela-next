// Watch out : this is server side code!
'use strict';
import request from 'request';
import ipapico from './ipapico.config';
//import { logger } from '../server/helper/logger';

export const getCompleteLocation = async () => { 
    const hash = {
        uri: ipapico.completeLocationUrl,
        headers: {
          Accept: 'application/json'
        },
        json: true
    };

    //logger.log('info', 'getCompleteLocation(): hash=', hash);

    await new Promise((resolve, reject) => {
        request.get(
            hash,
            (err, res, body) => {
                if (err) {
                    reject(err);
                } else {
                    console.log("Success!");
                    console.log(res.body);
                    resolve(body);
                }
            },
        );
    });
};
 