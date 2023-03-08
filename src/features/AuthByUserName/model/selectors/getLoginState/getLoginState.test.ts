import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLogin } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';

describe('getLoginState', () => {
    const state: DeepPartial<StateSchema> = {
        loginForm: {
            username: 'admin',
            password: '123',
            isLoading: false,
            error: 'error text',
        },
    };

    const stateEmpty: DeepPartial<StateSchema> = {
        loginForm: {},
    };

    test('should return error', () => {
        expect(getLogin(state as StateSchema).error).toEqual('error text');
    });
    test('should return username', () => {
        expect(getLogin(state as StateSchema).username).toEqual('admin');
    });
    test('should return password', () => {
        expect(getLogin(state as StateSchema).password).toEqual('123');
    });
    test('should return isLoading', () => {
        expect(getLogin(state as StateSchema).isLoading).toEqual(false);
    });

    test('should return empty error', () => {
        expect(getLogin(stateEmpty as StateSchema).error).toEqual('');
    });
    test('should return empty username', () => {
        expect(getLogin(stateEmpty as StateSchema).username).toEqual('');
    });
    test('should return empty password', () => {
        expect(getLogin(stateEmpty as StateSchema).password).toEqual('');
    });
    test('should return empty isLoading', () => {
        expect(getLogin(stateEmpty as StateSchema).isLoading).toEqual(false);
    });
});
