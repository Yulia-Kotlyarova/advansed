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

export const SquareS = Template.bind({});
SquareS.args = {
    theme: 'primary',
    children: '+',
    square: true,
    size: 's',
};

export const SquareM = Template.bind({});
SquareM.args = {
    theme: 'primary',
    children: '+',
    square: true,
    size: 'm',
};

export const SquareL = Template.bind({});
SquareL.args = {
    theme: 'primary',
    children: '+',
    square: true,
    size: 'l',
};

export const S = Template.bind({});
S.args = {
    theme: 'primary',
    children: 'Text',
    size: 's',
};

export const M = Template.bind({});
M.args = {
    theme: 'primary',
    children: 'Text',
    size: 'm',
};

export const L = Template.bind({});
L.args = {
    theme: 'primary',
    children: 'Text',
    size: 'l',
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
    theme: 'background',
    children: 'Text',
};

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
    theme: 'background-inverted',
    children: 'Text',
};

export const BackgroundLight = Template.bind({});
BackgroundLight.args = {
    theme: 'background',
    children: 'Text',
};
BackgroundLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const BackgroundInvertedLight = Template.bind({});
BackgroundInvertedLight.args = {
    theme: 'background-inverted',
    children: 'Text',
};
BackgroundInvertedLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Disabled = Template.bind({});
Disabled.args = {
    theme: 'primary',
    disabled: true,
    children: 'Text',
};

export const DisabledLight = Template.bind({});
DisabledLight.args = {
    theme: 'primary',
    disabled: true,
    children: 'Text',
};

DisabledLight.decorators = [ThemeDecorator(Theme.LIGHT)];
