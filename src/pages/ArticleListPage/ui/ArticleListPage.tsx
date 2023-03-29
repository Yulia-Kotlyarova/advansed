import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import classes from './ArticleListPage.module.scss';

interface ArticleListPageProps {

}

const ArticleListPage = (props: ArticleListPageProps) => {
    const { t } = useTranslation('article');
    return (
        <div className={classNames(classes.ArticleListPage, {}, [])} />
    );
};

export default memo(ArticleListPage);
