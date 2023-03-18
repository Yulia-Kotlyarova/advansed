import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'primary',
    value: '123',
    options: [
        { value: '123', content: '123' },
        { value: '567', content: '567' },
        { value: '890', content: '890' },
    ],
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'primary',
    value: '123',
    options: [
        { value: '123', content: '123' },
        { value: '567', content: '567' },
        { value: '890', content: '890' },
    ],
};

Secondary.decorators = [ThemeDecorator(Theme.LIGHT)];
