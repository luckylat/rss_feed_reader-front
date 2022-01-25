import React, { useState } from 'react';
import styled from 'styled-components';

import {makeStyles} from '@material-ui/core'

import Text from '../atoms/Text';
import Image, {defaultimage } from '../atoms/Image'




export interface RSSContentProps {
  title: string
  image?: string
  URL: string
}


const RSSForm = styled.div`
  height: 200px;
  width: 200px;
  background-color: #eeeeee;
`;

const StyledA = styled.a`
  text-decoration: none;
`


const RSSContent = (props: RSSContentProps) => {
  const{
    title,
    image,
    URL
  } = props;
  return(
    <>
      <RSSForm>
        <StyledA href={URL}>
          <Image imageURL={image || defaultimage.imageURL} imageHeight={128} imageWidth={128} />
          <Text value={title} size={16} color={"#000000"} />
        </StyledA>
      </RSSForm>
    </>
  )
}

export default RSSContent