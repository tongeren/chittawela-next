import diff from 'jest-diff';

// This does work yet, probably because of the following bug: https://github.com/facebook/jest/issues/7761
// Temporarily remove from "jest" in package.json: "setupFilesAfterEnv": ["<rootDir>/test/jest/matchers.js"], 
expect.extend({
    childrensNamesEqual(received, expected) {
        const options = {
            comment: 'Array.toStrictEqual equality'
        };

        const calculated = received.children().map(node => node.name());
        const pass = expect(calculated).toStrictEqual(expected);

        const message = `Expected value to equal: \n ${expected.join()} \n Received: ${calculated}\n `
        const message = pass
            ? () =>
                this.utils.matcherHint('toBe', undefined, undefined, options) +
                '\n\n' +
                `Expected: ${this.utils.printExpected(expected)}\n` +
                `Received: ${this.utils.printReceived(received)}`
            : () => {
                const difference = diff(expected, received, {
                expand: this.expand,
            });
          
            return (
                this.utils.matcherHint('toBe', undefined, undefined, options) +
                '\n\n' +
                (difference && difference.includes('- Expect')
                ? `Difference:\n\n${diffString}`
                : `Expected: ${this.utils.printExpected(expected)}\n` + `Received: ${this.utils.printReceived(received)}`)
            );
        };

        return { actual: received, message, pass };
    },
    // Add more matcher properties as extensions later
});
