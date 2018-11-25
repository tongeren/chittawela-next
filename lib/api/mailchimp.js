// Watch out : this is server side code!
import request from 'request';
import mailChimp from './mailchimp.config';

const log = "mailchimp.js: addSingleSubscriberToList():";

export const addSingleSubscriberToList = async ({ user }) => { 
  const data = {
    email_address: user.email,
    status: mailChimp.initialSubscriptionStatusMailchimp
  };

  const hash = {
    uri: mailChimp.listMembersUrl,
    headers: {
      Accept: 'application/json',
      Authorization: `Basic ${Buffer.from(`apikey:${mailChimp.apiKey}`).toString('base64')}`,
    },
    json: true,
    body: data,
  };

  await new Promise((resolve, reject) => {
    request.post(
      hash,
      (err, response, body) => {
        if (err) {
          console.log(log, err);
          reject(err);
        } else {
          resolve(body);
        }
      },
    );
  });
}


