import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUserName';

export const getLoginState = (state: StateSchema) => state?.loginForm;

export const getLogin = createSelector(getLoginState, (data: LoginSchema) => ({
    username: data?.username ?? '',
    password: data?.password ?? '',
    error: data?.error ?? '',
    isLoading: data?.isLoading ?? false,
}));
