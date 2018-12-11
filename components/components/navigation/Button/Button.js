import { Fragment } from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    borderRadius: 3
  },
  input: {
    display: 'none',
  },
});

const button = (props) => {
  const { link, variant, color, clicked, text } = props;

  return(
    <Fragment>
      <Link href={link}>
        <Button variant={variant} color={color} onClick={clicked}>{text}</Button>
      </Link>
    </Fragment>
  );
};

export default withStyles(styles)(button);
