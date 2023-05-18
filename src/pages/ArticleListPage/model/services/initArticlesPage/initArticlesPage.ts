import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Order } from 'shared/types';
import { ArticleSortField } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import { articlesPageActions } from '../../slice/articlePageSlice';
import { getArticlesPageInited } from '../../selectors/articleListSelectors';

import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
  >(
      'articlesPage/initArticlesPage',
      async (searchParams, thunkApi) => {
          const { getState, dispatch } = thunkApi;
          // @ts-ignore
          const inited = getArticlesPageInited(getState());
          if (!inited) {
              const sort = searchParams.get('sort') as ArticleSortField;
              const search = searchParams.get('search');
              const order = searchParams.get('order') as Order;
              const type = searchParams.get('type') as ArticleType;

              if (sort) {
                  dispatch(articlesPageActions.setSort(sort));
              }

              if (search) {
                  dispatch(articlesPageActions.setSearch(search));
              }

              if (order) {
                  dispatch(articlesPageActions.setOrder(order));
              }

              if (type) {
                  dispatch(articlesPageActions.setType(type));
              }
              dispatch(articlesPageActions.initState());
              dispatch(fetchArticlesList({}));
          }
      },
  );
