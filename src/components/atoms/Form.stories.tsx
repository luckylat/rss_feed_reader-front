
import { Story } from "@storybook/react"
import Form, { FormProps } from './Form';

export default {
  title: 'atoms/Form',
  component: Form,
};

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "URL",
};
