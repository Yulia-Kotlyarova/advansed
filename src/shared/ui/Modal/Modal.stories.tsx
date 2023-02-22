import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Text',
};

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'Text',
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
