import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageView,
} from 'pages/ArticleListPage/model/selectors/articleListSelectors';
import { ArticleSortField, ArticleView, ArticleViewSelector } from 'entities/Article';
import { articlesPageActions } from 'pages/ArticleListPage/model/slice/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { BaseInput } from 'shared/ui/BaseInput/BaseInput';
import { ArticleSortSelector } from 'entities/Article/model/ui/ArticleSortSelector/ArticleSortSelector';
import { Order } from 'shared/types';
import { fetchArticlesList } from 'pages/ArticleListPage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { useTranslation } from 'react-i18next';
import { ArticleTypesTabs } from 'features/ArticleTypesTabs/ArticleTypesTabs';
import { ArticleType } from 'entities/Article/model/types/article';
import classes from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo(({ className }: ArticlesPageFiltersProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('article');

    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, []);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((value: ArticleView) => {
        dispatch(articlesPageActions.setView(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, []);

    const onChangeSort = useCallback((value: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, []);

    const onChangeOrder = useCallback((order: Order) => {
        dispatch(articlesPageActions.setOrder(order));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, []);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, []);

    const onChangeType = useCallback((type: ArticleType) => {
        console.log('type', type);
        dispatch(articlesPageActions.setType(type));
        fetchData();
    }, []);

    return (
        <div className={classNames('', {}, [className])}>
            <div className={classes.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card>
                <BaseInput
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Search')}
                />
            </Card>
            <ArticleTypesTabs onChangeType={onChangeType} />
        </div>
    );
});
