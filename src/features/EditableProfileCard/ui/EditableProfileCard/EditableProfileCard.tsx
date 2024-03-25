import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile';
import { DynamicModalLoader, ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { VStack } from 'shared/ui/Stack';
import { ValidateProfileError } from '../../model/consts/consts';
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import {
    getProfileValidateError,
} from '../../model/selectors/getProfileValidateError/getProfileValidateError';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import {
    getProfileIsLoading,
} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface EditableProfileCardProps {
    id: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { id } = props;
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

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

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
            <VStack
                align="start"
                gap="32"
            >
                <ProfilePageHeader readonly={readonly} />
                {
                    validateError?.length
                            && validateError.map((error) => (
                                <BaseText
                                    key={validateErrorsTranslate[error]}
                                    text={error}
                                    theme="error"
                                    dataTestId="EditableProfileCard.Error"
                                />
                            ))
                }
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
            </VStack>
        </DynamicModalLoader>
    );
});
