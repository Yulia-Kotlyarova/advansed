import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModalLoader, ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    profileReducer,
    ProfileCard, getProfileValidateError,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency/model/types/currancy';
import { Country } from 'entities/Country/model/types/country';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const dataForm = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateError = useSelector(getProfileValidateError);

    const validateErrorsTranslate = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t('incorrect user data'),
        [ValidateProfileError.INCORRECT_USER_AGE]: t('incorrect age'),
        [ValidateProfileError.INCORRECT_USER_COUNTRY]: t('incorrect country'),
        [ValidateProfileError.SERVER_ERROR]: t('server error'),
        [ValidateProfileError.INCORRECT_NO_DATA]: t('no data'),
    };

    useEffect(() => {
        dispatch(fetchProfileData());
    }, []);

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value ?? '' }));
    }, []);

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value ?? '' }));
    }, []);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value ?? '' }));
    }, []);

    const onChangeCountry = useCallback((value?: Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, []);

    const onChangeCurrency = useCallback((value?: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, []);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    }, []);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, []);

    return (
        <DynamicModalLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                {
                    validateError?.length
                    && validateError.map((error) => (
                        <BaseText key={validateErrorsTranslate[error]} text={error} theme="error" />
                    ))
                }
                <ProfilePageHeader readonly={readonly} />
                <ProfileCard
                    data={dataForm}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeCity={onChangeCity}
                    onChangeCountry={onChangeCountry}
                    onChangeCurrency={onChangeCurrency}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                />
            </div>
        </DynamicModalLoader>
    );
};

export default ProfilePage;
