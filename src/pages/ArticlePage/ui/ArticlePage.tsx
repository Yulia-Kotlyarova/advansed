import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { CommentList } from 'entities/Comment';
import { DynamicModalLoader, ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddNewComment } from 'features/AddNewComment';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import { getArticlesRecommendations } from '../model/slice/ArticleDetailsRecommendationsSlice';
import {
    getArticleRecommendationsError,
    getArticleRecommendationsLoading,
} from '../model/selectors/recommendations/recommendations';
import { articleDetailPageReducer } from '../model/slice';
import { ArticlePageHeader } from './ArticlePageHeader/ArticlePageHeader';
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentByArticleId } from '../model/services/fetchCommentByArticleId/fetchCommentByArticleId';
import { getArticleCommentsError, getArticleCommentsLoading } from '../model/selectors/commrnts/comments';
import { getArticlesComment } from '../model/slice/ArticleDetailsCommentSlice';
import classes from './ArticlePage.module.scss';

const reducers: ReducersList = {
    articleDetailPage: articleDetailPageReducer,
};

const ArticlePage = (props: any) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticlesComment.selectAll);
    const isLoading = useSelector(getArticleCommentsLoading);
    const error = useSelector(getArticleCommentsError);

    const recommendations = useSelector(getArticlesRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsLoading);
    const recommendationsError = useSelector(getArticleRecommendationsError);

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    const sendNewComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

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
                <ArticlePageHeader />
                <ArticleDetails id={id} />
                <BaseText text={t('comments')} size="m" />
                <AddNewComment sendNewComment={sendNewComment} />
                <BaseText text={t('recommendations')} size="m" />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    view={ArticleView.SMALL}
                    className={classes.articleListWrap}
                />
                <CommentList isLoading={isLoading} error={error} comments={comments} />
            </Page>
        </DynamicModalLoader>
    );
};

export default memo(ArticlePage);
