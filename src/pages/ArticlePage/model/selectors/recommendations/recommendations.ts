import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsLoading = (state: StateSchema) => {
    return state.articleDetailPage?.recommendations?.isLoading ?? false;
};
export const getArticleRecommendationsError = (state: StateSchema) => {
    return state.articleDetailPage?.recommendations?.error ?? '';
};
