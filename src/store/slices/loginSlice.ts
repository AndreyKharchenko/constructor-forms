import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI } from "../../api/api";

export const signUp = createAsyncThunk(
    'login/signUp',
    async function(data: ILogin) {
        try {
            const response = await loginAPI.signUp(data.username, data.password);
            console.log('responce', response);
            return response.data;
        } catch (error) {
            console.error('ERR: login');
        }
        
    }
);

interface ILogin {
    username: string,
    password: string
}


const initialState: ILogin = {
    username: '',
   password: ''
}

const cartSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        
    },
})

export default cartSlice.reducer