import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {

}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    return (
        <div className={classNames(classes.ArticleDetailsPage, {}, [className])} />
    );
};

export default memo(ArticleDetailsPage);
