import { Currency } from 'entities/Currency/model/types/currancy';
import { Country } from 'entities/Country/model/types/country';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_USER_AGE = 'INCORRECT_USER_AGE ',
  INCORRECT_USER_COUNTRY= 'INCORRECT_USER_COUNTRY',
  INCORRECT_NO_DATA= 'INCORRECT_NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
  id?: string,
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile,
  form?: Profile,
  isLoading: boolean,
  error?: string,
  readonly: boolean,
  validateError?: ValidateProfileError[],
}
