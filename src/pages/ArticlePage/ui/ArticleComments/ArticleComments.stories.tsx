import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleComments } from './ArticleComments';

export default {
    title: 'page/ArticlePage/ui/ArticleComments',
    component: ArticleComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleComments>;

const Template: ComponentStory<typeof ArticleComments> = (args) => <ArticleComments {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {};

PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];
