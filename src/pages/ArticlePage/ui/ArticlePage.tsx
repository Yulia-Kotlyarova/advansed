import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { CommentList } from 'entities/Comment';
import { DynamicModalLoader, ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { useSelector } from 'react-redux';
import { getArticleCommentsError, getArticleCommentsLoading } from 'pages/ArticlePage/model/selectors/commrnts/comments';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentByArticleId } from 'pages/ArticlePage/model/services/fetchCommentByArticleId/fetchCommentByArticleId';
import { AddNewComment, addNewCommentActions } from 'features/AddNewComment';
import { addCommentForArticle } from 'pages/ArticlePage/model/services/addCommentForArticle/addCommentForArticle';
import { getNewCommentText } from 'features/AddNewComment/model/selectors/addNewCommentSelectors';
import { articleDetailsCommentReducer, getArticlesComment } from '../model/slice/ArticleDetailsCommentSlice';

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentReducer,
};

const ArticlePage = (props: any) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticlesComment.selectAll);
    const isLoading = useSelector(getArticleCommentsLoading);
    const error = useSelector(getArticleCommentsError);

    if (!id) {
        return <BaseText text={t('404')} theme="error" />;
    }

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    });

    const sendNewComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <DynamicModalLoader reducers={reducers} removeAfterUnmount>
            <ArticleDetails id={id} />
            <BaseText text={t('comments')} size="m" />
            <AddNewComment sendNewComment={sendNewComment} />
            <CommentList isLoading={isLoading} error={error} comments={comments} />
        </DynamicModalLoader>
    );
};

export default memo(ArticlePage);
