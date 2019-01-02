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
    const {step, noOfUpdates, formData, onChange } = props;

    switch (step) {
        case 0:
            return <ContactForm 
                        key={ noOfUpdates.contact }
                        formText={ text.contact } 
                        formData={ formData.contact }
                        onChange={ onChange('contact') }
                    />;
        case 1:
            return <AddressForm 
                        key={ noOfUpdates.address }
                        formText={ text.address } 
                        formData={ formData.address }
                        onChange={ onChange('address') }
                    />;
        case 2:
            return <CardForm 
                        key={ noOfUpdates.card }
                        formText={ text.payment } 
                        formData={ formData.card }
                        onChange={ onChange('card') }
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
    noOfUpdates: PropTypes.shape({ 
        contact: PropTypes.number.isRequired,
        address: PropTypes.number.isRequired,
        card: PropTypes.number.isRequired
    }),
    formData: PropTypes.shape({
        contact: PropTypes.object.isRequired,
        address: PropTypes.object.isRequired,
        card: PropTypes.object.isRequired
    }),
    onChange: PropTypes.func.isRequired
};

export default stepContent;