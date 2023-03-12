import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { DynamicModalLoader, ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    return (
        <DynamicModalLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                <BaseText title={t('profile page')} />
            </div>
        </DynamicModalLoader>
    );
};

export default ProfilePage;
