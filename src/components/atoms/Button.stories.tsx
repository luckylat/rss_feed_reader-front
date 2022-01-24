import { Story } from "@storybook/react"
import Button, {ButtonProps} from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  action: () => {
    window.alert('Hello!');
  },
};
