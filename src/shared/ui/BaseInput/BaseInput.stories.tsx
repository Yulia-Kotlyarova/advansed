import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BaseInput } from './BaseInput';

export default {
    title: 'shared/BaseInput',
    component: BaseInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof BaseInput>;

const Template: ComponentStory<typeof BaseInput> = (args) => <BaseInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: 'value',
    placeholder: 'placeholder',
};
