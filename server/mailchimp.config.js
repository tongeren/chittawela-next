// Use dotenv to read .env vars into Node
require('dotenv').config()

const sendEmail = false; // setting this to true locally doesn't make mailchimp send out an email...
const subscriptionStatusMailchimp = sendEmail ? "pending" : "subscribed";

const mailChimp = {
    listID: process.env.MAILCHIMP_MEMBERS_LIST_ID, 
    apiKey: process.env.MAILCHIMP_API_KEY, 
    dataCenter: process.env.MAILCHIMP_DATA_CENTER,
    apiVersion: process.env.MAILCHIMP_API_VERSION,
    initialSubscriptionStatusMailchimp: subscriptionStatusMailchimp
};

mailChimp.listMembersEndPoint = "/lists/<li>/members/".replace("<li>", mailChimp.listID);
mailChimp.apiUrl = "https://<dc>.api.mailchimp.com/<av>".replace("<dc>", mailChimp.dataCenter).replace("<av>", mailChimp.apiVersion);
mailChimp.listMembersUrl = mailChimp.apiUrl + mailChimp.listMembersEndPoint;

export default mailChimp;