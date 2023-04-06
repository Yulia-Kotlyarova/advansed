import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { updateProfileData } from './updateProfileData';

describe('updateProfileData', () => {
    const profileData = {
        id: '1',
        username: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'lastname',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD,
    };
    test('updateProfile success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: profileData },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileData);
    });

    test('server error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: profileData },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: { ...profileData, lastname: '' } },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
