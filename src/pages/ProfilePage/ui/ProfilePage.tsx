import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'shared/ui/Page/Page';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return <BaseText text={t('Profile not found')} />;
    }
    return (
        <Page className={classNames('', {}, [className])}>
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;
