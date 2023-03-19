import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
    const errors: ValidateProfileError[] = [];

    if (!profile) {
        errors.push(ValidateProfileError.INCORRECT_NO_DATA);
        return errors;
    }
    const {
        lastname, first, age, country,
    } = profile;

    if (!lastname || !first) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!age) {
        errors.push(ValidateProfileError.INCORRECT_USER_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_USER_COUNTRY);
    }

    return errors;
};
