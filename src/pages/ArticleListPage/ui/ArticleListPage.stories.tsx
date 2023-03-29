import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleListPage from './ArticleListPage';

export default {
    title: 'shared/ArticleListPage',
    component: ArticleListPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListPage>;

const Template: ComponentStory<typeof ArticleListPage> = (args) => <ArticleListPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {};

PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];
