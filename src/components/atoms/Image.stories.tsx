
import { Story } from "@storybook/react"
import Image, { ImageProps } from './Image';

export default {
  title: 'atoms/Image',
  component: Image,
};

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: {
    imageURL: "https://1.bp.blogspot.com/-vsrjLB8Wyng/YEGP_R749_I/AAAAAAABdck/-khfythfWqU5wb6X4FzfzeaJVhIztvByACNcBGAsYHQ/s180-c/buranko_boy_sad.png",
  }
};
