import { Fragment } from 'react';
import { getNames } from 'country-list';

const countries = getNames();

const countryChoiceList = () => (
    <Fragment>
        { countries.map((country, i) => (
            <option key={ i } value={ country }>
                { country }
            </option>
        ))}  
    </Fragment>
);

export default countryChoiceList;