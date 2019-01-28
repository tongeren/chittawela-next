import { Component } from 'react';
import getDisplayName from '../helper/getDisplayName';

const restrictToClient = (WrappedComponent) => {
    class RestrictedToClient extends Component {
        state = {
            isClient: false
        };

        componentDidMount() {
            // This lifecycle method is only called at client side
            this.setState({ isClient: true });
        };

        render() {
            return this.state.isClient ? <WrappedComponent { ...this.props } isClient={ true }/> : null; 
        };
    };

    RestrictedToClient.displayName = `restrictToClient(${getDisplayName(WrappedComponent)})`;

    return RestrictedToClient;
};

export default restrictToClient;

