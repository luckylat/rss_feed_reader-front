import React, { useState } from 'react';
import styled from 'styled-components';

import {makeStyles} from '@material-ui/core'

import Text from '../atoms/Text';
import Image, { image } from '../atoms/Image'




export interface RSSContentProps {
  title: string
  image: image
  URL?: string
}


const RSSForm = styled.div`
  height: 200px;
  width: 200px;
  background-color: #000000;
`;



const RSSContent = (props: RSSContentProps) => {
  const{
    title,
    image,
    URL
  } = props;
  return(
    <>
      <RSSForm>
        <a href={URL}>
          <Image image={image} />
          <Text value={title} size={16} />
        </a>
      </RSSForm>
    </>
  )
}

export default RSSContent