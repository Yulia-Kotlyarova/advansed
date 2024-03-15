import { Currency } from 'entities/Currency/model/types/currancy';
import { Country } from 'entities/Country/model/types/country';

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
