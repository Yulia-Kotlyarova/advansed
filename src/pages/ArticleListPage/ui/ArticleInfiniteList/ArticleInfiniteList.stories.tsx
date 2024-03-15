import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
    title: 'pages/ArticleListPage/ui/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {};

PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];
