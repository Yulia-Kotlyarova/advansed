import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlePageSlice';
import { getArticlesPageInited } from '../../selectors/articleListSelectors';

import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
  >(
      'articlesPage/initArticlesPage',
      async (_, thunkApi) => {
          const { getState, dispatch } = thunkApi;
          // @ts-ignore
          const inited = getArticlesPageInited(getState());
          if (!inited) {
              dispatch(articlesPageActions.initState());
              dispatch(fetchArticlesList({ page: 1 }));
          }
      },
  );
