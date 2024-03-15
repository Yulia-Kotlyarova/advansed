import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addNewCommentReducer } from 'features/AddNewComment/model/slices/addNewCommentSlice';
import { articleDetailPageReducer } from 'pages/ArticlePage/model/slice';
import { profileReducer } from 'features/EditableProfileCard/model/slice/profileSlice';

const defaultAsyncReducer: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addNewComment: addNewCommentReducer,
    articleDetailPage: articleDetailPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
