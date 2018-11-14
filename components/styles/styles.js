import { createMuiTheme } from '@material-ui/core/styles';
import { whitesmoke, black, turquoise, rosegold, gold, champagne } from './colors';

const chittawelaTheme = createMuiTheme({
    palette: {
        default: {
            main: whitesmoke
        },
        primary: {
            main: black
        },
        secondary: {
            main: gold
        },
        error: {
            main: rosegold
        }
    }, 
    // Migrate to Typography 2
    typography: {
        useNextVariants: true,
    },
});

export default chittawelaTheme;
