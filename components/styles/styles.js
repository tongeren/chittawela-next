import { createMuiTheme } from '@material-ui/core/styles';

const chittawelaTheme = createMuiTheme({
    palette: {
        default: {
            main: '#ffffff', /* black */
        },
        primary: {
            main: '#f5f5f5', /* whitesmoke */
        },
        secondary: {
            main: '#8f7a49', /* gold */
        },
        error: {
            main: '#585346',
        }
    }, 
    // Migrate to Typography 2
    typography: {
        useNextVariants: true,
    },
});

export default chittawelaTheme;

/*
black #ffffff
gold #8f7a49
whitesmoke 
#585346
*/