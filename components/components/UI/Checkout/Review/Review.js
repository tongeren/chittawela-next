import { Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
  { name: `Chittawela's Life Transformation` , price: 'THB 80,000' },
];

const styles = theme => ({
    listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});

const onlyShowLastFourDigits = (creditCardNumber) => {
  const length = creditCardNumber.length;
  const invisible = "*".repeat(length - 4);
  const visible = creditCardNumber.substring(length - 4, length);
  return  invisible + visible; 
};

const review = props => {
  const { classes, formText, formData } = props;

  return (
      <Fragment>
        <Typography variant="h6" gutterBottom>
          { formText.title }
        </Typography>
          <List disablePadding>
          { products.map(product => (
            <ListItem className={ classes.listItem } key={ product.name }>
              <ListItemText primary={ product.name } />
              <Typography variant="body2">{ product.price }</Typography>
            </ListItem>
          ))}
          <ListItem className={ classes.listItem }>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" className={classes.total}>
              { products[0].price }
            </Typography>
          </ListItem>
        </List>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              { formText.contact }
            </Typography>
            <Typography gutterBottom>{ formData.contact.name }</Typography>
            <Typography gutterBottom>{ formData.contact.email }</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              { formText.address }
            </Typography>
            <Typography gutterBottom>{ formData.address.addressLine1 }</Typography>
            <Typography gutterBottom>{ formData.address.addressLine2 }</Typography>
            <Typography gutterBottom>{ formData.address.city }</Typography>
            <Typography gutterBottom>{ formData.address.zip }</Typography>
            <Typography gutterBottom>{ formData.address.country }</Typography> 
          </Grid>
          <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              { formText.payment }
            </Typography>
            <Grid container>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{ formData.card.name }</Typography>
                    <Typography gutterBottom>{ onlyShowLastFourDigits(formData.card.number) }</Typography>
                    <Typography gutterBottom>{ formData.card.expiry }</Typography>
                  </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );  
};

review.propTypes = {
  classes: PropTypes.object.isRequired,
  formText: PropTypes.shape({
    title: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    payment: PropTypes.string.isRequired
  }),
  formData: PropTypes.shape({
    contact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    }),  
    address: PropTypes.shape({
      addressLine1: PropTypes.string.isRequired,
      addressLine2: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired
    }),  
    card: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      expiry: PropTypes.string.isRequired,
      cvc: PropTypes.string.isRequired
    })
  })  
};

export default withStyles(styles)(review);


