import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import classes from './ArticlePage.module.scss';

interface ArticlePageProps {

}

const ArticlePage = (props: ArticlePageProps) => {
    const { t } = useTranslation('article');
    return (
        <div className={classNames(classes.ArticlePage, {}, [])} />
    );
};

export default memo(ArticlePage);
