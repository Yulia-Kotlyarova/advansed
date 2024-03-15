import { UserSchema } from 'entities/User/model';
import { LoginSchema } from 'features/AuthByUserName';
import {
    CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { AddNewCommentSchema } from 'features/AddNewComment';
import { ArticlesPageSchema } from 'pages/ArticleListPage/model/types/articleList';
import { ScrollSaverSchema } from 'features/ScrollSaver';
import { ArticleDetailPageSchema } from 'pages/ArticlePage/model/types';
import { rtcApi } from 'shared/api/rtkApi';
import { ProfileSchema } from 'features/EditableProfileCard';

export interface StateSchema {
    user: UserSchema,
    scroll: ScrollSaverSchema,
    [rtcApi.reducerPath]: ReturnType<typeof rtcApi.reducer>,

    // async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addNewComment?: AddNewCommentSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailPage?: ArticleDetailPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducer = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: any) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void,
    getMountedReducer: () => MountedReducer,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager,
}

export interface ThunkExtra {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtra,
    getState: StateSchema,
}
