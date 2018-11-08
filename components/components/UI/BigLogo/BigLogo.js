import { Fragment } from 'react';
// import classes from './BigLogo.module.css';
// import chittawelaLogo from '../../../../static/logos/chittawela_colour_text_under.png';
const chittawelaLogo = require('../../../../static/logos/chittawela_colour_text_under.png');

const bigLogo = () => (
    <Fragment>
        <img className={"Logo"} src={chittawelaLogo} alt="Chittawela"/> 
        <style jsx>{`
            .Logo {
                max-width: 80%; 
                align-self: center;
                max-height: 64vh; /* 100-6-20=74 Toolbar=6vh Banner=94vh Logo=20vh*/
                z-index: 0;
            }
        `}
        </style>
    </Fragment>
);

export default bigLogo;

