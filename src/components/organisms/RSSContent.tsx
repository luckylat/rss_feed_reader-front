import React, { useState } from 'react';
import styled from 'styled-components';

import {makeStyles} from '@material-ui/core'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

import Text from '../atoms/Text';
import Image from '../atoms/Image'


library.add(faMinusCircle);

export interface RSSContentProps {
  title: string
  image: string
  URL: string
  fromURL: string
}


const RSSForm = styled.div`
  height: 200px;
  width: 200px;
  background-color: #eeeeee;
`;

const DeleteDiv = styled.div`
  position: relative;
  left: 180px;
  top: 0px;
`

const StyledA = styled.a`
  text-decoration: none;
`


const RSSContent = (props: RSSContentProps) => {
  const{
    title,
    image,
    URL,
    fromURL,
  } = props;
  return(
    <>
      
      <RSSForm>
        <DeleteDiv>
          <FontAwesomeIcon icon="minus-circle" />
        </DeleteDiv>
        <StyledA href={URL}>
          <Image imageElement={image} imageHeight={120} imageWidth={120} />
          <Text value={title} size={16} color={"#000000"} height={60}/>
        </StyledA>
      </RSSForm>
    </>
  )
}

export default RSSContent