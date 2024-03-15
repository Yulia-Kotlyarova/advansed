import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/EditableProfileCardSchema';
import { getProfileValidateError } from './getProfileValidateError';

describe('getProfileValidateError', () => {
    test('should return validateError', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileError.SERVER_ERROR],
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: undefined,
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual(undefined);
    });
});
