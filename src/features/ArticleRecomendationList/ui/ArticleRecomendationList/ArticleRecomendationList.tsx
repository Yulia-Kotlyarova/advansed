import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import classes from 'pages/ArticlePage/ui/ArticlePage.module.scss';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

export const ArticleRecomendationList = memo(() => {
    const { t } = useTranslation('article');

    const {
        data: recommendations,
        isLoading,
        error,
    } = useArticleRecommendationsList(4);

    if (isLoading || error || !recommendations) {
        return null;
    }

    return (
        <VStack gap="8">
            <BaseText text={t('Check it out')} size="m" />
            <ArticleList
                articles={recommendations}
                isLoading={isLoading}
                view={ArticleView.SMALL}
                virtualized={false}
                className={classes.articleListWrap}
            />
        </VStack>
    );
});
