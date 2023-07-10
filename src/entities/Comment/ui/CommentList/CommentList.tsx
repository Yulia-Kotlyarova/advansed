import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { useTranslation } from 'react-i18next';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../..';
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
    if (isLoading) {
        return (
            <>
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
            </>
        );
    }
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
