// Watch out : this is server side code!
'use strict';
import request from 'request';
import mailChimp from './mailchimp.config';

export const addSingleSubscriberToList = async ({ user }) => { 
  const data = {
    email_address: user.email,
    status: mailChimp.initialSubscriptionStatusMailchimp,
    merge_fields: {
      FNAME: user.firstName,
      LNAME: user.lastName,
    }
  };

  console.log(`Server-side API method addSingleSubscriberToList`);
  console.log(`data: ${JSON.stringify(data)}`);

  const hash = {
    uri: mailChimp.listMembersUrl,
    headers: {
      Accept: 'application/json',
      Authorization: `apikey ${mailChimp.apiKey}`,
    },
    json: true,
    body: data,
  };

  console.log(`hash: ${JSON.stringify(hash)}`);

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
}


// Authorization: `Basic ${Buffer.from(`apikey:${mailChimp.apiKey}`).toString('base64')}`,