
import { Story } from "@storybook/react"
import RSSContent, { RSSContentProps } from './RSSContent';

import { DefaultImage } from "../../resources/DefaultImage";

export default {
  title: 'organisms/RSSContent',
  component: RSSContent,
};

const Template: Story<RSSContentProps> = (args) => <RSSContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Hello",
  image: DefaultImage,
  URL: "https://www.irasutoya.com/"
};
