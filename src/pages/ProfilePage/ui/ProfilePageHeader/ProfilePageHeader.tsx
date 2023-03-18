import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import classes from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
    readonly?: boolean;
}

export const ProfilePageHeader = ({ className, readonly }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

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
        <div className={classNames(classes.ProfilePageHeader, {}, [className])}>
            <BaseText title={t('profile')} />
            {
                readonly
                    ? (
                        <BaseButton onClick={onEdit}>
                            {t('edit')}
                        </BaseButton>
                    )

                    : (
                        <>
                            <BaseButton onClick={onSave}>
                                {t('save')}
                            </BaseButton>
                            <BaseButton theme="outline-red" onClick={onCancelEdit}>
                                {t('cancel')}
                            </BaseButton>
                        </>
                    )
            }
        </div>
    );
};
