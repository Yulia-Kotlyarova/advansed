import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleListPage from './ArticleListPage';

export default {
    title: 'pages/ArticleListPage',
    component: ArticleListPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListPage>;

const Template: ComponentStory<typeof ArticleListPage> = (args) => <ArticleListPage {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({})];
Primary.args = {};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {};

PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];
