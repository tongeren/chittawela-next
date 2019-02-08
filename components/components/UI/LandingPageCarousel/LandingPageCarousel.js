import { Fragment, Component } from 'react';
import CarouselContent from './CarouselContent/CarouselContent';
import SubscribeDialog from '../Dialogs/SubscribeDialog/SubscribeDialog';
import ConfirmationDialog from '../Dialogs/ConfirmationDialog/ConfirmationDialog';
import slidesData from './SlidesData';

class LandingPageCarousel extends Component {
    state = {
        showSubscribeDialog: false,
        showConfirmationDialog: false
    };

    openSubscribeDialogHandler = () => {
        this.setState({ showSubscribeDialog: true })
    };

    closeSubscribeDialogHandler = () => {
        this.setState({ showSubscribeDialog: false }); 
    };

    openConfirmationDialogHandler = () => {
        this.setState({ showConfirmationDialog: true });
    };

    closeConfirmationDialogHandler = () => {
        this.setState({ showConfirmationDialog: false });
    };

    render() {
        const { showSubscribeDialog, showConfirmationDialog } = this.state;

        return(  
            <Fragment>
                <CarouselContent 
                    clicked={ showSubscribeDialog }
                    onClickHandler={ this.openSubscribeDialogHandler } 
                    slidesData={ slidesData }
                />  
                <SubscribeDialog
                    showDialog={ showSubscribeDialog }
                    onCloseHandler={ this.closeSubscribeDialogHandler }
                    onSubscribeHandler={ this.openConfirmationDialogHandler }
                />   
                <ConfirmationDialog  
                    showDialog={ showConfirmationDialog }
                    onCloseHandler={ this.closeConfirmationDialogHandler }
                /> 
            </Fragment>
        );
    };    
};

export default LandingPageCarousel;