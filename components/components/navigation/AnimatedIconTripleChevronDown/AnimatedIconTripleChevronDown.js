import { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import { nextPage } from '../../../routes/Routes';

const tripleChevronDownIcon = require('../../../../static/icons/TripleChevronDown.svg');

class AnimatedIconTripleChevronDown extends Component {
    componentDiDMount() {
        const { router } = this.props;
        const currentPath = router.pathname;
        const page = nextPage(currentPath);
        router.prefetch(page);
    }
    
    render() {
        const { router } = this.props;
        const currentPath = router.pathname;
        const page = nextPage(currentPath);
        
        return (
            <Fragment>
                <div className={"Animation"}>
                    <img className={"Icon"} onClick={() => router.push(page)} src={tripleChevronDownIcon} alt="MenuIcon" />
                </div>      
                <style jsx>{`
                    .Icon {
                        align-self: center;
                        height: 4vh;
                    }

                    .Animation {
                        animation-iteration-count: infinite;
                        animation-name: moveUpDown;
                        animation-delay: 0s;
                        animation-duration: 1.5s;
                        animation-timing-function: cubic-bezier(0.09, 0.55, 0.58, 0.96);
                        animation-fill-mode: both;
                        align-self: center;
                    }

                    @keyframes moveUpDown {
                        0% { transform: translate3d(0, 0, 0); }
                        50% { transform: translate3d(0, 2.4vh, 0); }
                        100% { transform: translate3d(0, 0, 0); }
                    }
                `}
                </style>
            </Fragment>
        );
    }      
}

export default withRouter(AnimatedIconTripleChevronDown);
