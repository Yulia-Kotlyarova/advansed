import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { Order } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article>{
  isLoading?: boolean,
  error?: string,
  view?: ArticleView,

  // pagination
  page: number,
  limit?: number,
  hasMore: boolean,

  // filters
  order: Order,
  sort: ArticleSortField,
  search: string,
  type: ArticleType,

  _inited: boolean
}
