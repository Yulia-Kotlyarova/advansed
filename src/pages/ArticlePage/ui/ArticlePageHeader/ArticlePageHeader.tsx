import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from 'pages/ArticlePage/model/selectors/article/getCanEditArticle';
import { getArticleDetails } from 'entities/Article';
import classes from './ArticlePageHeader.module.scss';

interface ArticlePageHeaderProps {
  className?: string;
}

export const ArticlePageHeader = memo(({ className }: ArticlePageHeaderProps) => {
    const navigate = useNavigate();
    const { t } = useTranslation('article');

    const article = useSelector(getArticleDetails);
    const canEdit = useSelector(getCanEditArticle);

    const handleBackToList = useCallback(() => {
        navigate(RoutePath.article_list);
    }, []);

    const handleEditArticle = useCallback(() => {
        navigate(`${RoutePath.article}${article?.id}/edit`);
    }, [article?.id]);

    return (
        <div className={classNames(classes.ArticlePageHeader, {}, [className])}>
            <BaseButton theme="secondary" onClick={handleBackToList}>
                {t('back')}
            </BaseButton>
            {canEdit && (
                <BaseButton
                    theme="secondary"
                    onClick={handleEditArticle}
                >
                    {t('edit')}
                </BaseButton>
            )}
        </div>
    );
});
