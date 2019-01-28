import getDisplayName from '../helper/getDisplayName';

const OMISE_PUBLIC_KEY="pkey_test_5d07ypdylix0uyec1y9";

const passToClient = (WrappedComponent) => {
    const ExtendedWithData = (props) => {
        return <WrappedComponent { ...props } publicKey={ OMISE_PUBLIC_KEY } />;
    };
    
    ExtendedWithData.displayName = `passToClient(${getDisplayName(WrappedComponent)})`;

    return ExtendedWithData;
};

export default passToClient;


