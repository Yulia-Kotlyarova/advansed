import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticlePageHeader } from './ArticlePageHeader';

export default {
    title: 'shared/ArticlePageHeader',
    component: ArticlePageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticlePageHeader>;

const Template: ComponentStory<typeof ArticlePageHeader> = () => <ArticlePageHeader />;

export const Primary = Template.bind({});
Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryLight = Template.bind({});
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];
