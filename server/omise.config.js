// Use dotenv to read .env vars into Node
require('dotenv').config()

const OmiseConfig = {
    secretKey: process.env.OMISE_SECRET_KEY,
    chargesEndPoint: process.env.OMISE_CHARGES_END_POINT
};

export default OmiseConfig;