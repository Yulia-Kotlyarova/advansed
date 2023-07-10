import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { BaseLink } from 'shared/ui/BaseLink/BaseLink';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import { Comment } from '../../model/types/comment';
import classes from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(classes.CommentCard, {}, [className, classes.isLoading])}>
                <Skeleton className={classes.avatar} width="36px" height="36px" />
                <div style={{ width: '100%' }}>
                    <Skeleton width="100%" height="40px" />
                    <Skeleton width="100%" height="100px" />
                </div>
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(classes.CommentCard, {}, [className])}>
            <BaseLink to={`${RoutePath.profile}${comment.user.id}`}>
                {comment.user?.avatar
                // eslint-disable-next-line i18next/no-literal-string
                    ? <Avatar className={classes.avatar} alt="avatar" avatar={comment.user.avatar} />
                    : (
                        <div className={classes.mockAvatar}>
                            <span className={classes.name}>
                                {comment.user?.username.split('')[0]}
                            </span>
                        </div>
                    )}
            </BaseLink>
            <div>
                <BaseText title={comment.user?.username} size="s" />
                <BaseText text={comment.text} />
            </div>
        </div>
    );
});
