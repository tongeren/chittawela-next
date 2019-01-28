// client-side API endpoint: api/v1/ipapico/ipv6
import expressRoutesApis from './api.config';
import { sendRequest } from '../common/request';

const expressRouteIpapico = expressRoutesApis.Ipapico;

export const getIPv6 = async () => {
    const path = expressRouteIpapico;
    const options = {};

    const data = await sendRequest(path, 'GET', options);

    return data.ip;
};
