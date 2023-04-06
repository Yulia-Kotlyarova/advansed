import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User/model';
import { getArticleDetails } from 'entities/Article/model/selectors/articleDetails';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addNewCommentActions } from 'features/AddNewComment/model/slices/addNewCommentSlice';
import { getNewCommentText } from '../selectors/addNewCommentSelectors';

export const sendComment = createAsyncThunk<
  Comment,
  void,
  ThunkConfig<string>
  >(
      'addCommentForm/sendComment',
      async (_, thunkApi) => {
          const { extra, rejectWithValue, getState } = thunkApi;
          // @ts-ignore
          const userData = getUserAuthData(getState());
          // @ts-ignore
          const text = getNewCommentText(getState());
          // @ts-ignore
          const article = getArticleDetails(getState());
          if (!text || !userData || !article) {
              return rejectWithValue('no data');
          }

          try {
              const response = await extra.api.post<Comment>('/comments', {
                  articleId: article.id,
                  userId: userData.id,
                  text,
              });

              if (!response?.data) {
                  throw new Error();
              }
              const dispatch = useAppDispatch();
              dispatch(addNewCommentActions.setText(''));
              return response.data;
          } catch (e) {
              console.log(e);
              return rejectWithValue('error');
          }
      },
  );
