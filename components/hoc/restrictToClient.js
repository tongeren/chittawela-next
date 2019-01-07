import { Component } from 'react';

export default (WrappedComponent) => {
    return class extends Component {
        state = {
            isClient: false
        };

        componentDidMount() {
            // This lifecycle method is only called at client side
            this.setState({ isClient: true });
        };

        render() {
            return this.state.isClient ? <WrappedComponent {...this.props} /> : null; 
        };
    };    
};
