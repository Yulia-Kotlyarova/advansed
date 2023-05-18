import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentReducer } from '../slice/ArticleDetailsCommentSlice';
import { articleDetailsRecommendationsReducer } from '../slice/ArticleDetailsRecommendationsSlice';
import { ArticleDetailPageSchema } from '../types/index';

export const articleDetailPageReducer = combineReducers<ArticleDetailPageSchema>({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentReducer,
});
