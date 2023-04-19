import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
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
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentByArticleId } from '../model/services/fetchCommentByArticleId/fetchCommentByArticleId';
import { getArticleCommentsError, getArticleCommentsLoading } from '../model/selectors/commrnts/comments';
import { articleDetailsCommentReducer, getArticlesComment } from '../model/slice/ArticleDetailsCommentSlice';

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentReducer,
};

const ArticlePage = (props: any) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const comments = useSelector(getArticlesComment.selectAll);
    const isLoading = useSelector(getArticleCommentsLoading);
    const error = useSelector(getArticleCommentsError);

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    });

    const sendNewComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const handleBackToList = useCallback(() => {
        navigate(RoutePath.article_list);
    }, []);

    if (!id) {
        return (
            <Page>
                <BaseText text={t('404')} theme="error" />
            </Page>
        );
    }

    return (
        <DynamicModalLoader reducers={reducers} removeAfterUnmount>
            <Page>
                <BaseButton theme="secondary" onClick={handleBackToList}>
                    {t('back')}
                </BaseButton>
                <ArticleDetails id={id} />
                <BaseText text={t('comments')} size="m" />
                <AddNewComment sendNewComment={sendNewComment} />
                <CommentList isLoading={isLoading} error={error} comments={comments} />
            </Page>
        </DynamicModalLoader>
    );
};

export default memo(ArticlePage);
