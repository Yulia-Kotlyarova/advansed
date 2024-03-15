import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getProfileData = (state: StateSchema) => state?.profile?.data;

// export const getLogin = createSelector(getProfileData, (data: Profile) => ({
//     first: data?.first ?? '',
//     lastname: data?.lastname ?? '',
//     age: data?.age ?? '',
//     currency: data?.currency ?? '',
//     country: data?.country ?? '',
//     city: data?.city ?? '',
//     username: data?.username ?? '',
//     avatar: data?.avatar ?? '',
// }));
