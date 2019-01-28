// client-side API endpoint: /api/v1/public/subscribe 

//import expressRoutesApis from './api.config';
import { sendRequest } from '../common/request';

//const expressRouteMailchimp = expressRoutesApis.Mailchimp;

export const subscribeToNewsletter = ({ user }) => {
    const path = '/api/v1/public/subscribe'; //expressRouteMailchimp;
    const options = { body: JSON.stringify({ user }) };

    sendRequest(path, 'POST', options);
};
