import React, { useState } from 'react';
import styled from 'styled-components';

import {makeStyles} from '@material-ui/core'

import Text from '../atoms/Text';

import {Color} from '../../utils/Color'





export interface HeaderProps {
  title: string
}


//ToDo: 文字を中央揃えさせる(なんで出来ないんだよ)

const StyledDiv = styled.div`
  background-color: ${Color.main};
  width: 140px;
  height: 40px;
  margin: auto;
`


const Header: React.FC<HeaderProps> = (props) => {
  const{
    title,
  } = props;
  const useStyles = () => makeStyles({
    text: {
      display: "inline-block",
      height: "100%",
      verticalAlign: "middle",
    },
  });
  const classes = useStyles()();
  return(
    <>
      <StyledDiv>
        <span className={classes.text}>
          <Text value={title} size={16} />
        </span>
      </StyledDiv>
    </>
  )
}

export default Header