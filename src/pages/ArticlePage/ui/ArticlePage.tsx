import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { DynamicModalLoader, ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { Page } from 'shared/ui/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecomendationList } from 'features/ArticleRecomendationList';
import { ArticleComments } from './ArticleComments/ArticleComments';
import { articleDetailPageReducer } from '../model/slice';
import { ArticlePageHeader } from './ArticlePageHeader/ArticlePageHeader';

const reducers: ReducersList = {
    articleDetailPage: articleDetailPageReducer,
};

const ArticlePage = (props: any) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Page>
                <BaseText text={t('404')} theme="error" />
            </Page>
        );
    }

    return (
        <DynamicModalLoader reducers={reducers}>
            <Page>
                <VStack gap="16">
                    <ArticlePageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRecomendationList />
                    <ArticleComments id={id} />
                </VStack>
            </Page>
        </DynamicModalLoader>
    );
};

export default memo(ArticlePage);
