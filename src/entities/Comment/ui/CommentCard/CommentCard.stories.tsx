import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comment: {
        id: '1',
        text: 'some comment',
        user: {
            id: '123',
            username: 'admin',
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
    },
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    comment: {
        id: '1',
        text: 'some comment',
        user: {
            id: '123',
            username: 'admin',
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
    },
};

PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};

export const IsLoadingLight = Template.bind({});
IsLoadingLight.args = {
    isLoading: true,
};

IsLoadingLight.decorators = [ThemeDecorator(Theme.LIGHT)];
