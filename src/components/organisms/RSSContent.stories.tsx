
import { Story } from "@storybook/react"
import RSSContent, { RSSContentProps } from './RSSContent';

export default {
  title: 'organisms/RSSContent',
  component: RSSContent,
};

const Template: Story<RSSContentProps> = (args) => <RSSContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Hello",
  image: "https://1.bp.blogspot.com/-vsrjLB8Wyng/YEGP_R749_I/AAAAAAABdck/-khfythfWqU5wb6X4FzfzeaJVhIztvByACNcBGAsYHQ/s180-c/buranko_boy_sad.png",
  URL: "https://www.irasutoya.com/"
};
