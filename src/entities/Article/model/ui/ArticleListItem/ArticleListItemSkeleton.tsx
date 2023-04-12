import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import classes from './ArticleListItem.module.scss';
import { ArticleView } from '../../types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(({ className, view }: ArticleListItemSkeletonProps) => {
    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(classes[view], {}, [className])}>
                <div className={classes.header}>
                    <Skeleton width="30px" height="30px" />
                    <Skeleton className={classes.name} width="130px" height="16px" />
                    <Skeleton width="130px" height="16px" className={classes.types} />
                    <Skeleton width="50px" height="16px" className={classes.date} />
                </div>
                <Skeleton width="100%" height="200px" className={classes.imageBox} />
                <Skeleton width="150px" height="16px" />
                <Skeleton width="100%" height="100px" />

                <div className={classes.footer}>
                    <Skeleton width="100px" height="30px" />
                    <Skeleton width="100px" height="30px" className={classes.views} />
                </div>
            </div>
        );
    }
    return (
        <div
            className={classNames(classes[view], {}, [className])}
        >
            <div className={classes.imageBox}>
                <Skeleton width="200px" height="200px" />
            </div>
            <div className={classes.textWrap}>
                <Skeleton width="130px" height="16px" />
            </div>
            <Skeleton width="150px" height="16px" />
        </div>
    );
});
