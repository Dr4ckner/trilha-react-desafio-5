import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://xkzswbysbenfhjdrolmb.supabase.co/rest/v1',
    headers: {
        apikey: "api-key",
        authorization: "authorization"
    }
});