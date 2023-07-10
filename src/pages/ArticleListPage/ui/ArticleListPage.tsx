import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import { DynamicModalLoader, ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { Page } from 'shared/ui/Page/Page';
import { useSearchParams } from 'react-router-dom';
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer, getArticles } from '../model/slice/articlePageSlice';
import {
    getArticlesPageError,
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageView,
} from '../model/selectors/articleListSelectors';
import classes from './ArticleListPage.module.scss';

interface ArticleListPageProps {

}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticleListPage = (props: ArticleListPageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const page = useSelector(getArticlesPageNum);
    const hasMore = useSelector(getArticlesPageHasMore);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        if (hasMore && !isLoading) {
            dispatch(fetchNextArticlesPage());
        }
    }, [page, hasMore, isLoading]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModalLoader reducers={reducers}>
            <Page
                className={classNames(classes.ArticleListPage, {}, [])}
                onScrollEnd={onLoadNextPart}
            >
                {error && <BaseText theme="error" text={error} />}
                <ArticlesPageFilters />
                <ArticleList
                    className={classes.listWrapper}
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModalLoader>
    );
};

export default memo(ArticleListPage);
