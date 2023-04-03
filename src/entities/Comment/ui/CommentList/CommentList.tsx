import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Comment } from 'entities/Comment/model/types/comment';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { CommentCard } from 'entities/Comment';
import { useTranslation } from 'react-i18next';
import classes from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
  error?: string;
}

export const CommentList = memo(({
    className, comments, isLoading, error,
}: CommentListProps) => {
    const { t } = useTranslation('article');

    if (error) {
        return <BaseText theme="error" text={error} />;
    }

    return (
        <div className={classNames(classes.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => <CommentCard isLoading={isLoading} comment={comment} />)
                : <BaseText text={t('no comments')} />}
        </div>
    );
});
