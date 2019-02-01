import { createContext } from 'react';
import getDisplayName from '../../helper/getDisplayName';
import ButtonTypes from '../../styles/types/buttons';

const styling = ButtonTypes.dialogs;

const StylingContext = createContext(styling);

export const withStylingContextProvider = style => WrappedComponent => {
    const StyledContextProvided = props => (
        <StylingContext.Provider value={ style }>
            <WrappedComponent { ...props } />
        </StylingContext.Provider>
    );

    StyledContextProvided.displayName=`withStylingContextProvider(${getDisplayName(WrappedComponent)})`;

    return StyledContextProvided;
};

export const withStylingContextConsumer = WrappedComponent => {
    const StyledContextConsumed = props => (
        <StylingContext.Consumer>
            { value => <WrappedComponent { ...props } style={ value }/> }
        </StylingContext.Consumer>
    );    

    StyledContextConsumed.displayName=`withStylingContextConsumer(${getDisplayName(WrappedComponent)})`;

    return StyledContextConsumed;
};
