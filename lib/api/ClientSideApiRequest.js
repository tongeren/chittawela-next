import { getRoute } from './api.config';
import { sendRequest } from '../common/request';
import _ from 'lodash/core';

export class ClientSideApiRequest {
    static build(name) {
        const apiCallInfo = getRoute(name);
        const { route, verb, transformation } = apiCallInfo;

        const clientSideFunction = async ({ body }) => {
            const options = _.isEmpty(body) ? {} : { body: JSON.stringify({ body }) };
            const data = await sendRequest(route, verb, options);

            return transformation(data);
        };
    
        return clientSideFunction;
    };    
};

