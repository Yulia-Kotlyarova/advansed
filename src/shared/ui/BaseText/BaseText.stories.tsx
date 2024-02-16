import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BaseText } from './BaseText';

export default {
    title: 'shared/BaseText',
    component: BaseText,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof BaseText>;

const Template: ComponentStory<typeof BaseText> = (args) => <BaseText {...args} />;

export const Dark = Template.bind({});
Dark.args = {
    title: 'Title',
    text: ' text text text text text',
};

export const Light = Template.bind({});
Light.args = {
    title: 'Title',
    text: ' text text text text text',
};

Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: ' text text text text text',
};

export const TitleH1 = Template.bind({});
TitleH1.args = {
    title: 'Title',
    size: 'l',
};

export const TitleH2 = Template.bind({});
TitleH2.args = {
    title: 'Title',
    size: 'm',
};

export const TitleH3 = Template.bind({});
TitleH3.args = {
    title: 'Title',
    size: 's',
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Title',
    text: ' text text text text text',
    theme: 'error',
};

export const ErrorLight = Template.bind({});
ErrorLight.args = {
    title: 'Title',
    text: ' text text text text text',
    theme: 'error',
};

ErrorLight.decorators = [ThemeDecorator(Theme.LIGHT)];
