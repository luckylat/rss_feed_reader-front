
import { Story } from "@storybook/react"
import Header, { HeaderProps } from './Header';

export default {
  title: 'organisms/Header',
  component: Header,
};

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Title!",
};
