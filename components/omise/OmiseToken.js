const createToken = async (cardInformation) => {
    return await new Promise( resolve => {
        Omise.createToken('card', cardInformation, (statusCode, response) => {
            if (statusCode === 200) {
                // Success: send back the TOKEN_ID to your server. The TOKEN_ID can be
                // found in `response.id`.
                console.log("success:", statusCode, response);
                return resolve({
                    success: true,
                    id: response.id
                }); 
            }
            else {
                // Error: display an error message. Note that `response.message` contains
                // a preformatted error message. Also note that `response.code` will be
                // "authentication_failure" "authentication failed"
                // "bad_request" "type is currently not supported"
                // "expired_charge" "charge expired"
                // "failed_capture" "Charge is not authorized"
                // "failed_void" "void failed"
                // "invalid_amount" "amount must be an integer"
                // "invalid_bank_account" "brand is not included in the list"
                // "invalid_card" "number is invalid and brand not supported (unknown)"
                // "invalid_card_token" "invalid card token"
                // "invalid_charge" "currency is currently not supported and amount is not a number"
                // "invalid_filter" "invalid filters"
                // "invalid_link" "currency is not currently supported"
                // "invalid_page" "invalid page"
                // "invalid_scope" "invalid scope"
                // "missing_card" "request contains no card parameters"
                // "not_found" "Customer cust_test_000000000000 was not found"
                // "used_token" "token was already used"
                // "service_not_found" "you are using api version which does not support this operation"
                console.log("failure:", statusCode, response);
                return resolve({
                    success: false,
                    message: response.message, 
                    code: message.code     
                });        
            };
        });
    });
};

const OmiseToken = {
    create: async (cardInformation, key) => {
        Omise.setPublicKey(key);
        return await createToken(cardInformation); 
    }
};

export default OmiseToken;
