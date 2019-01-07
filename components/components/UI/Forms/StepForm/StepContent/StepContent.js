import PropTypes from 'prop-types';

import ContactForm from '../../ContactForm/ContactForm';
import AddressForm from '../../AddressForm/AddressForm';
import CardForm from '../../CardForm/CardForm';
import Review from '../../../Checkout/Review/Review';
import Confirmation from '../../../Checkout/Confirmation/Confirmation';

const text = {
    contact: {
        title: "Contact information",
        labelSubscribe: "Please keep me informed!"
    },
    address: {
        title: "Home Address"
    },
    payment:  {
        title: ""
    },
    review: {
        title: "Order summary",
        contact: "Contact details",
        address: "Address details",
        payment: "Payment details"
    }    
};

const stepContent = (props) => {
    const { step, formData, onChange } = props;
    const { contact, address, card } = formData;

    switch (step) {
        case 0:
            return <ContactForm 
                        formText={ text.contact } 
                        formData={ contact }
                        onChange={ onChange }
                    />;
        case 1:
            return <AddressForm 
                        formText={ text.address } 
                        formData={ address }
                        onChange={ onChange }
                    />;
        case 2:
            return <CardForm 
                        formText={ text.payment } 
                        formData={ card }
                        onChange={ onChange }
                    />;
        case 3:
            return <Review
                        formText={ text.review } 
                        formData={ formData } 
                    />;    
        case 4: 
            return <Confirmation orderNo = { 1 } />;            
        default:
            throw new Error('Unknown step');
    }
};

stepContent.propTypes={
    step: PropTypes.number.isRequired,
    formData: PropTypes.shape({
        contact: PropTypes.object.isRequired,
        address: PropTypes.object.isRequired,
        card: PropTypes.object.isRequired
    }),
    onChange: PropTypes.func.isRequired
};

export default stepContent;