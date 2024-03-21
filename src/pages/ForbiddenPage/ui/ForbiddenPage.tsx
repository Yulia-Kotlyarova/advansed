import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'shared/ui/Page/Page';

const ForbiddenPage = memo(() => {
    const { t } = useTranslation('main');
    return (
        <Page>
            {t('You dont have a access to this page')}
        </Page>
    );
});

export default ForbiddenPage;
