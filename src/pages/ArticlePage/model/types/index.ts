import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';
import { ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema';

export interface ArticleDetailPageSchema {
  comments: ArticleDetailsCommentSchema;
  recommendations: ArticleDetailsRecommendationsSchema;
}
