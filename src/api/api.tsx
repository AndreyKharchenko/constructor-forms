import axios from "axios";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuZHJleSIsInN1YiI6OSwiaWF0IjoxNjcxMjEzMTkwfQ.w4mplHRT3GRNwkse-0d3CLkDPzMgiL-BueIHaWBO11c";
const instance = axios.create({
    baseURL: 'http://194.67.119.159:3000/',
    headers: {
        "Authorization": `bearer ${TOKEN}`
    }
});

export const loginAPI = {
    signUp(username: string, password: string) {
        return instance.post(`auth/login`, {username, password});
    },
}