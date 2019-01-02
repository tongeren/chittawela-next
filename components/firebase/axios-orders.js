import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://chittawela-website.firebaseio.com/'
});

export default instance;

