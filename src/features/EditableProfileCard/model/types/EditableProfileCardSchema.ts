import { Profile } from 'entities/Profile';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_USER_AGE = 'INCORRECT_USER_AGE ',
  INCORRECT_USER_COUNTRY = 'INCORRECT_USER_COUNTRY',
  INCORRECT_NO_DATA = 'INCORRECT_NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
  data?: Profile,
  form?: Profile,
  isLoading: boolean,
  error?: string,
  readonly: boolean,
  validateError?: ValidateProfileError[],
}
