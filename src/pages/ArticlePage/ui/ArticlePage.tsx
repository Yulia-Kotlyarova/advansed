import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { CommentList } from 'entities/Comment';
import classes from './ArticlePage.module.scss';

interface ArticlePageProps {

}

const ArticlePage = (props: ArticlePageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    if (!id) {
        return <BaseText text={t('404')} theme="error" />;
    }

    return (
        <>
            <ArticleDetails id={id} />
            <BaseText text={t('comments')} size="m" />
            <CommentList />
        </>
    );
};

export default memo(ArticlePage);
