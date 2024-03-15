import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/EditableProfileCardSchema';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData', () => {
    const profileData = {
        username: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'lastname',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD,
    };
    test('validateProfileData success', async () => {
        const result = validateProfileData(profileData);

        expect(result).toEqual([]);
    });

    test('incorrect first lastname', async () => {
        const result = validateProfileData({ ...profileData, first: '', lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...profileData, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...profileData, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_COUNTRY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_USER_AGE,
            ValidateProfileError.INCORRECT_USER_COUNTRY,
        ]);
    });
});
