// client-side API endpoint: /api/v1/public/subscribe 
import 'isomorphic-fetch';
import expressRoutesApis from './api.config';

const appUrl = "https://chittawela.herokuapp.com";
const expressRouteMailchimp = expressRoutesApis.Mailchimp;

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const ROOT_URL = dev ? `http://localhost:${port}` : appUrl;

const sendRequest = async (path, options = {}) => {
    const headers = {
        'Content-type': 'application/json',
    };

    const fetchUrl = `${ROOT_URL}${path}`;
    const fetchOptions = Object.assign({ method: 'POST', credentials: 'include' }, { headers }, options);

    const response = await fetch(
        fetchUrl,
        fetchOptions
    );

    const data = await response.json();

    if (data.error) {
        throw new Error(data.error);
    };

    return data;
};

export const subscribeToNewsletter = ({ user }) => {
    const path = expressRouteMailchimp;
    const options = { body: JSON.stringify({ user }) };

    sendRequest(path, options);
};
