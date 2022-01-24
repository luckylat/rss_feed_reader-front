
import { Story } from "@storybook/react"
import Text, { TextProps } from './Text';

export default {
  title: 'atoms/Text',
  component: Text,
};

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "Hello",
  size: 24
};
