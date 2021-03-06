import { Fragment } from 'react';

const tagLine = (props) => (
    <Fragment>
        <p className={"Tagline"}>{ props.text }</p>  
        <style jsx>{`
            .Tagline {
                text-align: center;
                margin-top: 0%;
                margin-bottom: 0%;
                color: whitesmoke;
                font-size: 8vw;
                font-family: 'Cormorant', serif;
                text-shadow: rgba(0,0,0,0.6) 0.2vw 0.2vw 1vw;
                letter-spacing: -0.06vw;
                align-self: center;
                max-width: 100vw;
                max-height: 20vh;
            }
        `}
        </style>
    </Fragment>
);

export default tagLine;





