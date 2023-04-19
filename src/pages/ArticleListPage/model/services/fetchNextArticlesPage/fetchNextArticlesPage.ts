import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlePageSlice';
import { getArticlesPageNum } from '../../selectors/articleListSelectors';

import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
  >(
      'articlesPage/fetchNextArticlesPage',
      // eslint-disable-next-line consistent-return
      async (_, thunkApi) => {
          const { getState, dispatch, rejectWithValue } = thunkApi;
          // @ts-ignore
          const page = getArticlesPageNum(getState());

          try {
              dispatch(articlesPageActions.setPage(page + 1));
              dispatch(fetchArticlesList({
                  page: page + 1,
              }));
          } catch (e) {
              return rejectWithValue('error');
          }
      },
  );
