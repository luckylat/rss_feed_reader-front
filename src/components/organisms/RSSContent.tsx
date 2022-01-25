import React, { useState } from 'react';
import styled from 'styled-components';

import {makeStyles} from '@material-ui/core'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

import Text from '../atoms/Text';
import Image from '../atoms/Image'

import {Deleter} from '../../utils/Connecter';


library.add(faMinusCircle);

export interface RSSContentProps {
  title: string
  image: string
  URL: string
  fromURL: string
}


const RSSForm = styled.div`
  height: 300px;
  width: 250px;
  background-color: #eeeeee;
`;

const DeleteDiv = styled.div`
  position: relative;
  left: 230px;
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

  const DeleteAction = (fromURL: string) => {
    if(window.confirm("このRSSリンクを削除しますか? : " + fromURL)){
      Deleter(fromURL).then((element) => {
        window.alert("Sucess!")
      }).catch((e) => console.log(e));
    }
  }

  return(
    <>
      
      <RSSForm>
        <DeleteDiv onClick={(() => DeleteAction(fromURL))}>
          <FontAwesomeIcon icon="minus-circle" />
        </DeleteDiv>
        <StyledA href={URL}>
          <Image imageElement={image} imageHeight={200} imageWidth={250} />
          <Text value={title} size={16} color={"#000000"} height={100}/>
        </StyledA>
      </RSSForm>
    </>
  )
}

export default RSSContent