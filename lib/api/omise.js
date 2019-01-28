// client-side API endpoint: /api/v1/omise/charge 
import expressRoutesApis from './api.config';
import { sendRequest } from '../common/request';

const expressRouteOmise = expressRoutesApis.Omise;

export const chargeCard = ({ transaction }) => {
    const path = expressRouteOmise;
    const options = { body: JSON.stringify({ transaction }) };

    sendRequest(path, 'POST', options);
};