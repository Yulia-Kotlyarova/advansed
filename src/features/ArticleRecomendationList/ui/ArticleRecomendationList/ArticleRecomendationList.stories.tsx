import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';
import { Article } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import { ArticleRecomendationList } from './ArticleRecomendationList';

export default {
    title: 'features/ArticleRecomendationList',
    component: ArticleRecomendationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRecomendationList>;

const Template: ComponentStory<typeof ArticleRecomendationList> = () => <ArticleRecomendationList />;

const mockArticlesList: Article = {
    id: '1',
    img: '',
    createdDate: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: 'title mock',
    subtitle: 'werwerwer',
    tag: [ArticleType.IT],
};
export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=4`,
            method: 'GET',
            status: 200,
            response: [
                mockArticlesList,
                { ...mockArticlesList, id: '2' },
                { ...mockArticlesList, id: '3' },
                { ...mockArticlesList, id: '4' },
            ],
        },
    ],
};
