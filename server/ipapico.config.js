// Use dotenv to read .env vars into Node
require('dotenv').config()

const ipapico = {
    completeLocationUrl: process.env.IPAPICO_COMPLETE_LOCATION_ENDPOINT
};

export default ipapico;
