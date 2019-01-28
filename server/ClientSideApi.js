import { getRoute } from '../lib/api/api.config';
import { ClientSideApiRequest } from '../lib/api/ClientSideApiRequest';

const callbackBuilder = (requestMethod, verb) => async (req, res) => {
    const { body } = (verb === 'get' ) ? {} : req.body;
    try {
        await requestMethod({ body });
    } catch (err) {
        res.json({ error: err.message || err.toString() });
    };    
};

const restRequestBuilder = verb => {
    switch (verb) {
        case 'post': 
            return server => server.post;
        case 'get':
            return server => server.get;
        default:
            console.log("restRequest not defined for this REST verb!");
            return undefined;             
    };
};

class ClientSideAPI {
    static init(server) {
        ClientSideAPI._server = server;
    };

    static build(name) { 
        const { verb, route } = getRoute(name);

        const apiRequestMethod = ClientSideApiRequest.build(name);
        const restRequest = restRequestBuilder(verb);
        const unboundRestAPIProvider = restRequest(ClientSideAPI._server);
        const restAPIProvider = unboundRestAPIProvider.bind(ClientSideAPI._server);
        const callback = callbackBuilder(apiRequestMethod, verb);

        return restAPIProvider(route, callback);
    };
};

// Cannot use static variables defined within Javascript classes yet
// See https://github.com/tc39/proposal-static-class-features/
ClientSideAPI._server;

export default ClientSideAPI;