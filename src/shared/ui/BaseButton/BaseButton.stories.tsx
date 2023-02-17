import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BaseButton } from './BaseButton';

export default {
    title: 'shared/BaseButton',
    component: BaseButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof BaseButton>;

const Template: ComponentStory<typeof BaseButton> = (args) => <BaseButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    theme: 'primary',
    children: 'Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
    theme: 'secondary',
    children: 'Text',
};

export const Outlined = Template.bind({});
Outlined.args = {
    theme: 'outlined',
    children: 'Text',
};
Outlined.decorators = [ThemeDecorator(Theme.LIGHT)];
