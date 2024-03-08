import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import { Listbox } from 'shared/ui/Listbox';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <Page>
            <h1>
                {' '}
                {t('main')}
            </h1>
            <h2>
                {' '}
                {t('main')}
            </h2>
        </Page>
    );
};

export default MainPage;
