import mailChimp from './mailchimp.config';

const lowerCaseAlphanumericRegex = /^[a-z0-9]+$/;
const listMemberUrlRegex = /https:\/\/[a-z]{2}[0-9]{2}.api.mailchimp.com\/[0-9].[0-9]\/list\/[a-z0-9]{10}\/members\/$/;

test(`listId should contain exactly 10 lower case alphanumeric characters`, () => {
    expect(mailChimp.listId).toMatch(lowerCaseAlphanumericRegex);
});

test(`listMembersUrl should have the right form`, () => {
    expect(mailChimp.listMembersUrl).toMatch(listMemberUrlRegex);
});

