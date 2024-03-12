import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BaseButton } from '../BaseButton/BaseButton';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ top: 100 }}>
                {' '}
                <Story />
                {' '}
            </div>
        ),
    ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    trigger: <BaseButton> Open Menu </BaseButton>,
    items: [
        {
            disabled: false,
            content: 'link',
            href: '/',
            onClick: () => {},
        },

        {
            disabled: true,
            content: 'link 2',
            href: '/',
            onClick: () => {},
        },
    ],
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    trigger: <BaseButton> Open Menu </BaseButton>,
    items: [
        {
            disabled: false,
            content: 'link',
            href: '/',
            onClick: () => {},
        },

        {
            disabled: true,
            content: 'link 2',
            href: '/',
            onClick: () => {},
        },
    ],
};

PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];
