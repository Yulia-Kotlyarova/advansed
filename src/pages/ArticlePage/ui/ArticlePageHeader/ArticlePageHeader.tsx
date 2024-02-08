import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetails } from 'entities/Article';
import { HStack } from 'shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article/getCanEditArticle';

export const ArticlePageHeader = memo(() => {
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
        <HStack justify="between">
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
        </HStack>
    );
});
