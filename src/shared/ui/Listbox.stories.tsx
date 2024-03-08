import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Listbox } from './Listbox';

export default {
    title: 'shared/Listbox',
    component: Listbox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = (args) => <Listbox {...args} />;

const args = {
    defaultValue: '123',
    items: [
        { value: '123', content: '123' },
        { value: '567', content: '567' },
        { value: '890', content: '890' },
    ],
};
export const Primary = Template.bind({});
Primary.args = {
    ...args,
};

export const TopDirection = Template.bind({});
TopDirection.args = {
    ...args,
    direction: 'top',
};

export const BottomDirection = Template.bind({});
BottomDirection.args = {
    ...args,
};

export const Label = Template.bind({});
Label.args = {
    ...args,
    label: 'Label',
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    ...args,
};

PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];
