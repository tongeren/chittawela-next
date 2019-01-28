import OmiseConfig from './omise.config';

const secretKeyRegex = /^skey_test_[a-z0-9]{19}$/;

test('secretKey should be defined', () => {
    expect(OmiseConfig.secretKey).toBeDefined();
});

test(`secretKey should start with 'pkey_test_' and contain exactly 19 lower case alphanumeric characters thereafter`, () => {
    expect(OmiseConfig.secretKey).toMatch(secretKeyRegex);
});

