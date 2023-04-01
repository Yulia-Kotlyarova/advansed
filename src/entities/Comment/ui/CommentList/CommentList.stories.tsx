import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

const comments = [
    {
        id: '1',
        text: 'some comment',
        user: {
            id: '123',
            username: 'admin',
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
    },
    {
        id: '2',
        text: 'another comment',
        user: {
            id: '123',
            username: 'admin',
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
    },
];

export const Primary = Template.bind({});
Primary.args = {
    comments,
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    comments,
};

PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];
