import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { Profile } from 'entities/Profile';

export const getProfileForm = (state: StateSchema) => state?.profile?.form ?? {};
