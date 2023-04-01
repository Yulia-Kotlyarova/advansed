import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModalLoader, ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    getArticleDetails,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../selectors/ArticleDetails';
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
    console.log('error', error);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton border="50%" width={100} height={100} />
                <Skeleton border="2px" width="100%" height="70px" />
                <Skeleton border="2px" width="100%" height="50px" />
                <Skeleton border="2px" width="100%" height="50px" />
            </>
        );
    } else if (error) {
        content = <div>{error}</div>;
    } else {
        content = 'ArticleDetails';
    }

    return (
        <DynamicModalLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(classes.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModalLoader>
    );
});
