import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User/model';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginProps {
    username: string;
    password: string;
}

export const fetchLogin = createAsyncThunk<User, LoginProps>(
    'users/fetchByIdStatus',
    async ({ username, password }: LoginProps, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', { username, password });
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
