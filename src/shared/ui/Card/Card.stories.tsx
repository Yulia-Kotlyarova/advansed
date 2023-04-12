import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    // eslint-disable-next-line i18next/no-literal-string
    children: <BaseText text="text" />,
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    // eslint-disable-next-line i18next/no-literal-string
    children: <BaseText text="text" />,
};

PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];
