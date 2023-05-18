import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { ArticleType } from 'entities/Article/model/types/article';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../selectors/articleListSelectors';

interface fetchArticlesListProps {
  replace?: boolean,
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  fetchArticlesListProps,
  ThunkConfig<string>
  >(
      'articlesPage/fetchArticlesList',
      async (props, thunkApi) => {
          const { extra, rejectWithValue, getState } = thunkApi;
          // @ts-ignore
          const page = getArticlesPageNum(getState());
          // @ts-ignore
          const limit = getArticlesPageLimit(getState());
          // @ts-ignore);
          const order = getArticlesPageOrder(getState());
          // @ts-ignore);
          const sort = getArticlesPageSort(getState());
          // @ts-ignore
          const search = getArticlesPageSearch(getState());
          // @ts-ignore
          const type = getArticlesPageType(getState());

          try {
              addQueryParams({
                  sort, order, search, type,
              });
              const response = await extra.api.get<Article[]>('/articles', {
                  params: {
                      _expand: 'user',
                      _limit: limit,
                      _page: page,
                      _sort: sort,
                      _order: order,
                      q: search,
                      type: type === ArticleType.ALL ? undefined : type,
                  },
              });

              if (!response.data) {
                  throw new Error();
              }

              return response.data;
          } catch (e) {
              return rejectWithValue('error');
          }
      },
  );
