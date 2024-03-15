import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { getArticles } from '../../model/slice/articlePageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articleListSelectors';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <BaseText theme="error" text={error} />;
    }

    return (
        <ArticleList
            articles={articles}
            view={view}
            isLoading={isLoading}
        />
    );
});
