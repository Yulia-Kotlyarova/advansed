import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { userActions } from 'entities/User/model';
import { fetchLogin } from './loginByUserName';

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
        const userData = { username: '123', id: '1' };

        const thunk = new TestAsyncThunk(fetchLogin);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
        const result = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test('login fail', async () => {
        const thunk = new TestAsyncThunk(fetchLogin);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: 'admi', password: '12' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
