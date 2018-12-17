import { getNames } from 'country-list';

const countries = getNames();

test(`Array 'countries' should contain the countries 'Thailand', 'United States', and 'Belgium'`, () => {
    const expected = ['Thailand', 'United States', 'Belgium'];
    expect(countries).toEqual(expect.arrayContaining(expected));
});
