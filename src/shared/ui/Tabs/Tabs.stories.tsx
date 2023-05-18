import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        { value: '1', content: 'IT' },
        { value: '2', content: 'NEWS' },
    ],
    value: '1',
    onClickTab: action('onClickTab'),
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    tabs: [
        { value: '1', content: 'IT' },
        { value: '2', content: 'NEWS' },
    ],
};

PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];
