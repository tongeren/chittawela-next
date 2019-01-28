// Express server info for apis used
const identity = data => data;
const onlyId = data => data.id;

const expressAPIInfo = [
    { 
        api: 'MailChimp',
        verb: 'post',
        route: '/api/v1/public/subscribe',
        transformation: identity,
        name: 'addSingleSubscriberToList'
    },
    {
        api: 'Omise',
        verb: 'post',
        route: '/api/v1/omise/charge',
        transformation: identity,
        name: 'chargeCard'
    },
    {
        api: 'Ipapi.co',
        verb: 'get',
        route: '/api/v1/ipapico/ipv6',
        transformation: onlyId,
        name: 'getCompleteLocation'
    }
];

export const getRoute = name => {
    return expressAPIInfo.find( apiCall => { 
        return (apiCall.name === name); 
    });
};


