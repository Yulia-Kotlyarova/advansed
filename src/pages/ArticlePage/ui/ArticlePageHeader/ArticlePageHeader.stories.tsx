import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticlePageHeader } from './ArticlePageHeader';

export default {
    title: 'shared/ArticlePageHeader',
    component: ArticlePageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePageHeader>;

const Template: ComponentStory<typeof ArticlePageHeader> = (args) => <ArticlePageHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {};

PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];
