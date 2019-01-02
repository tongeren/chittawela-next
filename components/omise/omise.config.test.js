import OmiseConfig from './omise.config';

const publicKeyRegex = /^pkey_test_[a-z0-9]{19}$/;

test(`publicKeyRegex should start with 'pkey_test_' and contain exactly 19 lower case alphanumeric characters thereafter`, () => {
    expect(OmiseConfig.publicKey).toMatch(publicKeyRegex);
});
