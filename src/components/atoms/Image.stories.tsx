
import { Story } from "@storybook/react"
import Image, { ImageProps } from './Image';

import { DefaultImage } from "../../resources/DefaultImage";

export default {
  title: 'atoms/Image',
  component: Image,
};

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageElement: DefaultImage,
  imageHeight: 128,
  imageWidth: 128
};
