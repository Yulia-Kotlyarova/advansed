import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    border: '2px',
    width: '100%',
    height: 100,
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    border: '2px',
    width: '100%',
    height: 100,
};

PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Round = Template.bind({});
Round.args = {
    border: '50%',
    width: 100,
    height: 100,
};

export const RoundLight = Template.bind({});
RoundLight.args = {
    border: '50%',
    width: 100,
    height: 100,
};
RoundLight.decorators = [ThemeDecorator(Theme.LIGHT)];
