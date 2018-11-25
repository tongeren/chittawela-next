import { isValidEmailAddress, isValidName } from  './validation';

const testEmailAddress = "dpvantongeren@gmail.com";
const testName = "Duncan van Tongeren";

test(`isValidEmailAddress(${testEmailAddress}) should be true`, () => {
    expect(isValidEmailAddress(testEmailAddress)).toBe(true);
});

test(`isValidName(${testName}) should be true`, () => {
    expect(isValidName(testName)).toBe(true);
});