import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment/model/types/comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';
import { fetchCommentByArticleId } from '../services/fetchCommentByArticleId/fetchCommentByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticlesComment = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailPage?.comments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'books',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentByArticleId.fulfilled, (
                state,
                action: PayloadAction<Comment[]>,
            ) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })

            .addCase(fetchCommentByArticleId.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { reducer: articleDetailsCommentReducer } = articleDetailsCommentsSlice;
