import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

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
        expect(getLoginState(state as StateSchema)?.error).toEqual('error text');
    });
    test('should return username', () => {
        expect(getLoginState(state as StateSchema)?.username).toEqual('admin');
    });
    test('should return password', () => {
        expect(getLoginState(state as StateSchema)?.password).toEqual('123');
    });
    test('should return isLoading', () => {
        expect(getLoginState(state as StateSchema)?.isLoading).toEqual(false);
    });

    test('should return undefined error', () => {
        expect(getLoginState(stateEmpty as StateSchema)?.error).toEqual(undefined);
    });
    test('should return undefined username', () => {
        expect(getLoginState(stateEmpty as StateSchema)?.username).toEqual(undefined);
    });
    test('should return undefined password', () => {
        expect(getLoginState(stateEmpty as StateSchema)?.password).toEqual(undefined);
    });
    test('should return undefined isLoading', () => {
        expect(getLoginState(stateEmpty as StateSchema)?.isLoading).toEqual(undefined);
    });
});
