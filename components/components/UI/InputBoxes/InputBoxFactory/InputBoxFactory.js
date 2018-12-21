import { Component } from 'react';

import { isValidName } from '../../../../validation/validation';
import { isValidEmailAddress } from '../../../../validation/validation';

import UncontrolledInput from '../UncontrolledInput/UncontrolledInput';

// id: (string) The id of the input element. Use that property to make label and helperText accessible for screen readers.
// name: (string) Name attribute of the input element.
// label: (node) The label content.
// autoComplete: (string) This property helps users to fill forms faster, especially on mobile devices. The name can be confusing, 
// as it's more like an autofill. 
// You can learn more about it here: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill

const inputboxes = {
    addressLine1: {
        //id: "address1", 
        name: "addressLine1",
        label: "Address line 1",
        autoComplete: "billing address-line-1",
        validator: null,
        required: true,
        fullWidth: true
    },
    addressLine2: {
        //id: "address2",
        name: "addressLine2",
        label: "Address line 2",
        autoComplete: "billing address-line-2",
        validator: null,
        required: false,
        fullWidth: true
    },
    cardName: {
        //id: "cardName",
        name: "cardName", 
        label: "Name on card", 
        autoComplete: "cc-name",
        validator: null,
        required: true,
        fullWidth: true
    },
    cardNumber: {
        //id: "cardNumber", 
        name: "cardNumber",
        label: "Card number", 
        autoComplete: "cc-number",
        validator: null,
        required: true,
        fullWidth: true
    },
    city: {
        id: "city",
        name: "city",
        label: "City",
        autoComplete: "billing address-level2",
        validator: null,
        required: true,
        fullWidth: true
    },
    country: {
        //id: "country",
        name: "country",
        label: "Country",
        autoComplete: "billing country",
        validator: null,
        required: true,
        fullWidth: true
    },
    cvc: {
        //id: "cvc",
        name: "cvc",
        label: "CVC",
        autoComplete: "cc-csc",
        validator: null,
        required: true,
        fullWidth: false
    },    
    email: {
        //id: "email",
        name: "email",
        label: "E-mail Address",
        autoComplete: "email",
        validator: isValidEmailAddress,
        required: true,
        fullWidth: true
    },
    expiry: {
        //id="expDate" ,
        name: "expiry",
        label: "Expiry date",
        autoComplete: "cc-exp",
        validator: null,
        required: true,
        fullWidth: false
    },
    name: {
        //id: "name",
        name: "name",
        label: "Name",
        autoComplete: "name",
        validator: isValidName,
        required: true,
        fullWidth: true
    },
    zip: {
        //id: "zip",
        name: "zip",
        label: "Zip / Postal code",
        autoComplete: "billing postal-code",
        validator: null,
        required: true,
        fullWidth: true
    }
};

class InputBoxFactory extends Component {
    static _handler;

    static init(handler) {
        InputBoxFactory._handler = handler;
    };    

    static build = (name, props) => {
        if (name === 'cvc') {
            console.log("{ ...props }", { ...props });
        };

        const { callback, ...allowedProps } =  Object.assign({}, inputboxes[name], props) // {...props, ...inputboxes[name]};

        if (name === 'cvc') {
            console.log("{ ...allowedProps }", { ...allowedProps });
        };    

        return (
            <UncontrolledInput
                { ...allowedProps }
                callback={ (event, ) => InputBoxFactory._handler(event, name) }
            />
        );    
    };                  
};

export default InputBoxFactory
