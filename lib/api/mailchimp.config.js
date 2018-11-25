import chittawelaConfig from '../../chittawela.config';

/*
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();


const mailChimp = {
    listID: serverRuntimeConfig.MAILCHIMP_MEMBERS_LIST_ID, 
    apiKey: serverRuntimeConfig.MAILCHIMP_API_KEY, 
    dataCenter: serverRuntimeConfig.MAILCHIMP_DATA_CENTER,
    apiVersion: serverRuntimeConfig.MAILCHIMP_API_VERSION,
    initialSubscriptionStatusMailchimp: subscriptionStatusMailchimp
};
*/

const sendEmail = false; // setting this to true locally doesn't make mailchimp send out an email...
const subscriptionStatusMailchimp = sendEmail ? "pending" : "subscribed";

const mailChimp = {
    listId: "2eb82e768c",
    apiKey: "11cd87232d1937b05f9bbc455abec32b-us19",
    dataCenter: "us19",
    apiVersion: "3.0",
    initialSubscriptionStatusMailchimp: subscriptionStatusMailchimp
};
  
mailChimp.listMembersEndPoint = "/list/<li>/members/".replace("<li>", mailChimp.listId);
mailChimp.apiUrl = "https://<dc>.api.mailchimp.com/<av>".replace("<dc>", mailChimp.dataCenter).replace("<av>", mailChimp.apiVersion);
mailChimp.listMembersUrl = mailChimp.apiUrl + mailChimp.listMembersEndPoint;

export default mailChimp;