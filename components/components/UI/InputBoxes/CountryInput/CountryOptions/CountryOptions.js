import countries from 'i18n-iso-countries';

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
const countryObject = countries.getNames("en");
const countryList = Object.values(countryObject);

const countryOptions = () => countryList.map((country, i) => <option key={ i } value={ country }>{ country }</option>);

export default countryOptions;