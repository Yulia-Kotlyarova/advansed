import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModalLoader, ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import EyeIcon from 'shared/assets/icons/eye.svg';
import Calendar from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { articleDetailsReducer } from '../../slice/articleDetailsSlice';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { fetchArticleById } from '../../services/fetchArticleById/fetchArticleById';
import { ArticleBlock, ArticleBlockType } from '../../types/article';
import {
    getArticleDetails,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../selectors/articleDetails';
import classes from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articleData = useSelector(getArticleDetails);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} className={classes.block} block={block} />;
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} className={classes.block} block={block} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} className={classes.block} block={block} />;
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton border="2px" width={100} height={100} />
                <Skeleton border="2px" width="100%" height="70px" />
                <Skeleton border="2px" width="100%" height="50px" />
                <Skeleton border="2px" width="100%" height="50px" />
            </>
        );
    } else if (error) {
        content = <BaseText theme="error" text={error} />;
    } else {
        content = (
            <>
                <Avatar avatar={articleData?.img} alt={t('avatar')} size="md" />
                <BaseText title={articleData?.title} text={articleData?.subtitle} />
                <div className={classes.iconWrap}>
                    <Icon Svg={EyeIcon} className={classes.topIcon} />
                    <BaseText text={`${articleData?.views}`} />
                </div>
                <div className={classes.iconWrap}>
                    <Icon Svg={Calendar} className={classes.topIcon} />
                    <BaseText text={articleData?.createdDate} />
                </div>
                {articleData?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModalLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(classes.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModalLoader>
    );
});
