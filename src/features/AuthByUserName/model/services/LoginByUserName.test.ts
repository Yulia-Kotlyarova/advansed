import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User/model';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchLogin } from './loginByUserName';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

// describe('LoginByUserName', () => {
//     let dispatch: Dispatch;
//     let getState: () => StateSchema;
//
//     beforeEach(() => {
//         dispatch = jest.fn();
//         getState = jest.fn();
//     });
//
//     test('login success', async () => {
//         const userData = { username: 'admin', id: '1' };
//
//         mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
//         const action = fetchLogin({ username: 'admin', password: '123' });
//         const result = await action(dispatch, getState, undefined);
//
//         expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
//         expect(dispatch).toHaveBeenCalledTimes(3);
//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(result.meta.requestStatus).toBe('fulfilled');
//         expect(result.payload).toEqual(userData);
//     });
//
//     test('login fail', async () => {
//         mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
//         const action = fetchLogin({ username: 'admi', password: '12' });
//         const result = await action(dispatch, getState, undefined);
//
//         expect(dispatch).toHaveBeenCalledTimes(2);
//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(result.meta.requestStatus).toBe('rejected');
//         expect(result.payload).toBe('error');
//     });
// });

describe('LoginByUserName', () => {
    test('login success', async () => {
        const userData = { username: 'admin', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

        const thunk = new TestAsyncThunk(fetchLogin);
        const result = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test('login fail', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunk = new TestAsyncThunk(fetchLogin);
        const result = await thunk.callThunk({ username: 'admi', password: '12' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
