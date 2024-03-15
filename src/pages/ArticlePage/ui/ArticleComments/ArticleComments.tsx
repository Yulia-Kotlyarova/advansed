import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { AddNewComment } from 'features/AddNewComment';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticlesComment } from '../../model/slice/ArticleDetailsCommentSlice';
import { getArticleCommentsError, getArticleCommentsLoading } from '../../model/selectors/commrnts/comments';
import {
    fetchCommentByArticleId,
} from '../../model/services/fetchCommentByArticleId/fetchCommentByArticleId';

interface ArticleCommentsProps {
  id: string
}
export const ArticleComments = memo(({ id }: ArticleCommentsProps) => {
    const { t } = useTranslation('about');
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticlesComment.selectAll);
    const isLoading = useSelector(getArticleCommentsLoading);
    const error = useSelector(getArticleCommentsError);

    const sendNewComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    });

    return (
        <>
            <BaseText text={t('comments')} size="m" />
            <AddNewComment sendNewComment={sendNewComment} />
            <CommentList isLoading={isLoading} error={error} comments={comments} />
        </>
    );
});
