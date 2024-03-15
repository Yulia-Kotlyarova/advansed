import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getProfileForm = (state: StateSchema) => state?.profile?.form ?? {};
