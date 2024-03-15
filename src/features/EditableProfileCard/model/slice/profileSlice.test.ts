import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../..';
import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice.test', () => {
    const data = {
        id: '1',
        username: 'admin',
        age: 26,
        country: Country.Ukraine,
        lastname: 'admin',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD,
    };

    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('set cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {};
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateError: undefined,
            form: state.data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };

        expect(profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
            username: '123456',
        }),
        )).toEqual({
            form: { username: '123456' },
        });
    });
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            // validateError: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
           state as ProfileSchema,
           updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            // validateError: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
           state as ProfileSchema,
           updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
