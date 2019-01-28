// Isomorphic HTML REST requests 
import 'isomorphic-fetch';
import { logger } from '../../components/helper/logger';

const appUrl = "https://chittawela.herokuapp.com";

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 443;
const ROOT_URL = dev ? `https://localhost:${port}` : appUrl;

export const sendRequest = async (path, method, options = {}) => {
    const headers = {
        'Content-type': 'application/json',
    };

    const fetchUrl = `${ROOT_URL}${path}`;
    const fetchOptions = Object.assign({ method: method , rejectUnauthorized: false, credentials: 'include' }, { headers }, options);

    const response = await fetch(
        fetchUrl,
        fetchOptions
    );

    const data = await response.json();
    logger.log('info', 'sendRequest(): data= %j', data);

    if (data.error) {
        throw new Error(data.error);
    };

    return data;
};

