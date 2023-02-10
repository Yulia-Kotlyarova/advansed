import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './PageNotFound.module.scss';

interface PageNotFoundProps {
    className?: string;
}

export const PageNotFound = ({ className }: PageNotFoundProps) => {
    const { t } = useTranslation('translation');

    return (
        <div className={classNames(classes.PageNotFound, {}, [className])}>
            <h2>{t('Page 404')}</h2>
        </div>
    );
};
