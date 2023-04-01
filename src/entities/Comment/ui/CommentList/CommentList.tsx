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
}

export const CommentList = memo(({ className, comments }: CommentListProps) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(classes.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => <CommentCard comment={comment} />)
                : <BaseText text={t('no comments')} />}
        </div>
    );
});
