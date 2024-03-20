import { useTranslation } from 'react-i18next';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model';
import { HStack } from 'shared/ui/Stack';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

interface ProfilePageHeaderProps {
    readonly?: boolean;
}

export const ProfilePageHeader = ({ readonly }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack justify="between">
            <BaseText title={t('profile')} />
            {canEdit && (readonly
                ? (
                    <BaseButton
                        onClick={onEdit}
                        data-testid="ProfilePageHeader.EditBtn"
                    >
                        {t('edit')}
                    </BaseButton>
                )

                : (
                    <HStack justify="end" gap="16">
                        <BaseButton
                            onClick={onSave}
                            data-testid="ProfilePageHeader.SaveBtn"
                        >
                            {t('save')}
                        </BaseButton>
                        <BaseButton
                            theme="outline-red"
                            onClick={onCancelEdit}
                            data-testid="ProfilePageHeader.ChancelBtn"
                        >
                            {t('cancel')}
                        </BaseButton>
                    </HStack>
                )
            )}

        </HStack>
    );
};
