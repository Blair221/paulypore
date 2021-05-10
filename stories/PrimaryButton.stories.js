import React from 'react';

import { PrimaryButton } from '../src/components/PrimaryButton/PrimaryButton';

export default {
	title: 'Atoms/PrimaryButton',
	component: PrimaryButton,
	argTypes: {
		background: { control: 'background' },
	},
};

const Template = (args) => <PrimaryButton {...args}>Submit</PrimaryButton>;

export const Primary = Template.bind({});
Primary.args = {
	background: 'white',
	color: 'black',
};
