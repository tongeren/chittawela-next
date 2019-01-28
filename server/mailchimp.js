// Watch out : this is server side code!
'use strict';
import request from 'request';
import mailChimp from './mailchimp.config';
import { logger } from '../components/helper/logger';

export const addSingleSubscriberToList = async ({ user }) => { 
  const data = {
    email_address: user.email,
    status: mailChimp.initialSubscriptionStatusMailchimp,
    merge_fields: {
      FNAME: user.firstName,
      LNAME: user.lastName,
    }
  };

  logger.log('info', 'addSingleSubscriberToList(): data=', data);

  const hash = {
    uri: mailChimp.listMembersUrl,
    headers: {
      Accept: 'application/json',
      Authorization: `apikey ${mailChimp.apiKey}`,
    },
    json: true,
    body: data,
  };

  logger.log('info', 'addSingleSubscriberToList(): data=', data);

  await new Promise((resolve, reject) => {
    if (hash) {}
    request.post(
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

