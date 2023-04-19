import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import classes from './PageNotFound.module.scss';

interface PageNotFoundProps {
    className?: string;
}

export const PageNotFound = ({ className }: PageNotFoundProps) => {
    const { t } = useTranslation('translation');

    return (
        <Page className={classNames(classes.PageNotFound, {}, [className])}>
            <h2>{t('Page 404')}</h2>
        </Page>
    );
};
