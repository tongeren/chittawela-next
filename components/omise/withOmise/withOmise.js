import { Fragment } from 'react';
import PropTypes from 'prop-types';

import getDisplayName from '../../helper/getDisplayName';
import OmiseToken from '../OmiseToken';
import OmiseScriptHead from '../OmiseScriptHead/OmiseScriptHead';

// Client-side API methods
import { ClientSideApiRequest } from '../../../lib/api/ClientSideApiRequest';

const chargeCard = ClientSideApiRequest.build('chargeCard');
const getIPv6 = ClientSideApiRequest.build('getCompleteLocation');

// This component is purely because of separation of concerns
const withOmise = (WrappedComponent) => { 
    const OmiseFunction = (props) => {
        const createToken = cardInformation => OmiseToken.create(cardInformation, props.publicKey);

        const finalizeTransaction = async (token) => {
            // Get client ip
            const ipv6 = await getIPv6({});
            console.log("withOmise: ipv6=", ipv6);
            
            const transaction = { card: token, ip: ipv6 };

            // Charge card via Omise
            try {
                await chargeCard({ transaction });
            } 
            catch (err) {
                console.log(err); 
            };
        };

        const { publicKey, ...allowedProps } = props;
        return (
            <Fragment>
                <OmiseScriptHead />
                <WrappedComponent 
                    { ...allowedProps } 
                    omiseTokenHandler={ createToken } 
                    omiseChargeCardHandler={ finalizeTransaction } 
                />
            </Fragment>
        );     
    };    

    OmiseFunction.displayName = `withOmise(${getDisplayName(WrappedComponent)})`; 

    return OmiseFunction;
};

withOmise.propTypes = {
    WrappedComponent: PropTypes.element.isRequired,
    isClient: PropTypes.bool.isRequired,
    publicKey: PropTypes.string.isRequired
};

export default withOmise;
