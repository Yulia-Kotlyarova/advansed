import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticlesRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailPage?.recommendations || recommendationsAdapter.getInitialState(),
);

export const ArticleDetailsRecommendationsSlice = createSlice({
    name: 'ArticleDetailsRecommendations',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        entities: {},
        ids: [],
        isLoading: false,
        error: '',
    }),
    reducers: {
        // update: (state, action: PayloadAction<ArticleDetailsRecommendations>) => {
        //     state.data = { ...state.data, ...action.payload };
        // },
        // revert: (state) => {
        //     state.validateErrors = undefined;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsRecommendationsActions } = ArticleDetailsRecommendationsSlice;
export const { reducer: articleDetailsRecommendationsReducer } = ArticleDetailsRecommendationsSlice;
