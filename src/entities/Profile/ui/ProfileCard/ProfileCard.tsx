import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import { BaseInput } from 'shared/ui/BaseInput/BaseInput';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;

}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(classes.ProfileCard, {}, [className])}>
            <BaseText title={t('profile')} />
            <BaseButton>
                {t('edit')}
            </BaseButton>
            <BaseInput value={data?.first ?? ''} onChange={() => console.log('')} />
            <BaseInput value={data?.lastname ?? ''} onChange={() => console.log('')} />
        </div>
    );
};
