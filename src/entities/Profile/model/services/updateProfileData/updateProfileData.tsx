import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { validateProfileData } from 'entities/Profile/model/services/validateProfileData/validateProfileData';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile, ValidateProfileError } from '../../types/profile';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
  >(
      'profile/updateProfileData',
      async (_, thunkApi) => {
          const { extra, rejectWithValue, getState } = thunkApi;

          // @ts-ignore
          const formData = getProfileForm(getState());

          const errors = validateProfileData(formData);

          if (errors.length) {
              rejectWithValue(errors);
          }

          try {
              const response = await extra.api.put('/profile', formData);
              return response.data;
          } catch (e) {
              console.log(e);
              return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
          }
      },
  );
