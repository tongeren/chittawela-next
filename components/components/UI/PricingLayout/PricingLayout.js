import { Fragment } from 'react';
import Link from 'next/link';
import Router from 'next/router';
// Material UI
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
//import Button from '../../navigation/Button/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
//import Grid from '@material-ui/core/Grid';
//import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import StyledCloudinaryImage from '../StyledCloudinaryImage/StyledCloudinaryImage';
//import { rosegold } from '../../../styles/colors';
import purple from '@material-ui/core/colors/purple';


const cardPicture = {
    publicId: "006.JPG"
};

const deal = {
    title: 'TRANSFORM YOUR LIFE',
    subheader: 'learn to live from the heart',
    price: 'EUR 2130',
    period: '7 days 7 nights',
    buttonText: 'I AM READY TO CHANGE!',
    buttonVariant: 'contained',
};

const styles = { 
    card: {
        maxWidth: '90vw',
        margin: 'auto'
    },
    cardActionsRoot: {
        margin: 'auto',
        width: '55vw'
    },
    buttonRoot: {
        margin: 'auto',
        width: '55vw'
    }   
};

const theme = createMuiTheme({
    palette: {
      primary: purple,
    }
});

const PricingLayout = (props) => {
  const { classes } = props;

  return (
    <Fragment>
        <Card classes={{ root: classes.card }}>
            <StyledCloudinaryImage publicId={cardPicture.publicId} style={{ maxWidth: '100vw' }} />
            <CardHeader
                title={deal.title}
                subheader={deal.subheader}
                titleTypographyProps={{ align: 'center', fontSize: '14vw' }}
                subheaderTypographyProps={{ align: 'center', fontSize: '10vw' }}
            />
            <CardContent>
                <Typography variant="h5" color="textPrimary">
                    {deal.price}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    {deal.period}
                </Typography>
            </CardContent>
            <CardActions classes={{ root: classes.cardActionsRoot }}>  
                <MuiThemeProvider theme={theme}>
                    <Link href="/checkout">
                        <Button 
                            classes={{ root: classes.buttonRoot }} 
                            variant={deal.buttonVariant} 
                            color="primary"
                            onClick={() => Router.push('/checkout')}>
                            {deal.buttonText}
                        </Button> 
                    </Link>
                </MuiThemeProvider>
            </CardActions>
        </Card>
    </Fragment>
  );
}

PricingLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PricingLayout);


