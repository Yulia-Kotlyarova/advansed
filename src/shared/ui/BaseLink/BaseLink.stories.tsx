import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BaseLink, BaseLinkTheme } from './BaseLink';

export default {
    title: 'shared/BaseLink',
    component: BaseLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof BaseLink>;

const Template: ComponentStory<typeof BaseLink> = (args) => <BaseLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: BaseLinkTheme.PRIMARY,
};

export const Inverted = Template.bind({});
Inverted.args = {
    children: 'Text',
    theme: BaseLinkTheme.INVERTED,
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    children: 'Text',
    theme: BaseLinkTheme.PRIMARY,
};

PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const InvertedLight = Template.bind({});
InvertedLight.args = {
    children: 'Text',
    theme: BaseLinkTheme.INVERTED,
};

InvertedLight.decorators = [ThemeDecorator(Theme.LIGHT)];
