import PropTypes from 'prop-types';
import MuiButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { withStylingContextConsumer } from '../../../../hoc/withStylingContext/withStylingContext';

const styles = theme => ({
    button: {
        margin: 0.5 * theme.spacing.unit,
    }
});

const Button = props => {
    const { classes, style, children } = props;
    
    return (
        <MuiButton className={ classes.button } { ...style }>{ children }</MuiButton>
    );
};

Button.propTypes={
    style: PropTypes.shape({
        color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']).isRequired,
        size: PropTypes.oneOf(['small','medium', 'secondary']).isRequired,
        variant: PropTypes.oneOf(['text', 'outlined', 'contained', 'fab', 'extendedFab']).isRequired,
    }),
    children: PropTypes.node.isRequired
};

export default withStyles(styles)(withStylingContextConsumer(Button));