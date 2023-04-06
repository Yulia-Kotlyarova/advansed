import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getArticleDetails } from 'entities/Article/model/selectors/articleDetails';
import { getUserAuthData } from 'entities/User/model';
import { fetchCommentByArticleId } from '../fetchCommentByArticleId/fetchCommentByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
  >(
      'articleDetails/addCommentForArticle',
      async (text, thunkApi) => {
          const {
              extra, dispatch, rejectWithValue, getState,
          } = thunkApi;
          // @ts-ignore
          const userData = getUserAuthData(getState());
          // @ts-ignore
          const article = getArticleDetails(getState());

          if (!userData || !text || !article) {
              return rejectWithValue('no data');
          }

          try {
              const response = await extra.api.post<Comment>('/comments', {
                  articleId: article.id,
                  userId: userData.id,
                  text,
              });

              if (!response.data) {
                  throw new Error();
              }

              dispatch(fetchCommentByArticleId(article.id));

              return response.data;
          } catch (e) {
              return rejectWithValue('error');
          }
      },
  );
