import axios from 'axios';

const labEdiit = axios.create({
    baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/',
});

export default labEdiit;
