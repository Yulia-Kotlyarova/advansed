import { memo } from 'react';
import { Page } from 'shared/ui/Page/Page';
import { useTranslation } from 'react-i18next';

const AdminPanelPage = memo(() => {
    const { t } = useTranslation('translation');

    return (
        <Page>
            {t('Admin Page')}
        </Page>
    );
});

export default AdminPanelPage;
