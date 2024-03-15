import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData', () => {
    test('fetchProfile success', async () => {
        const profileData = {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'lastname',
            first: 'asd',
            city: 'asf',
            currency: Currency.USD,
        };

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileData);
    });

    test('fetchProfile fail', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
