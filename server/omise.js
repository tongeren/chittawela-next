// Watch out : this is server side code!
'use strict';
import request from 'request';
import OmiseConfig from './omise.config';
import { chittawelaDeal } from './chittawela.data';

export const chargeCard = async ({ transaction }) => { 
  const charge = {
    amount: chittawelaDeal.priceTHB,
    currency: 'THB',
    description: chittawelaDeal.description,
    card: transaction.token,
    ip: transaction.ip
  };

  console.log(`Server-side API method chargeCard`);
  console.log(`data: ${JSON.stringify(charge)}`);

  const hash = {
    uri: OmiseConfig.chargesEndPoint,
    headers: {
      Accept: 'application/json',
      Authorization: `apikey ${OmiseConfig.secretKey}`,
    },
    json: true,
    body: charge,
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
};