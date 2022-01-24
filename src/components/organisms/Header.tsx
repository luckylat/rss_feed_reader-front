import React, { useState } from 'react';
import styled from 'styled-components';

import {makeStyles, AppBar, Toolbar} from '@material-ui/core'

import Text from '../atoms/Text';

import {Color} from '../../utils/Color'


export interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = (props) => {
  const{
    title,
  } = props;

  return(
    <>
      <AppBar position="static">
        <Toolbar>
          <Text value={title} size={16} />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header