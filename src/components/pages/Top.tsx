import React, { useState } from 'react';
import styled from 'styled-components';

import { Grid } from '@material-ui/core';

import Header from '../organisms/Header'

import Form from '../atoms/Form'
import Button from '../atoms/Button'

import {Poster, Getter} from '../../utils/Connecter';

const StyledDiv = styled.div`
  height: calc(100vh - 140px);
  width: 100vw;
`;

function Top() {
  const RSSFeedURL = React.createRef<HTMLInputElement>();
  const AddRSSFeed = () => {
    const AddURL = RSSFeedURL.current?.value;
    if(AddURL){
      Poster(AddURL).then((res) => {
        window.alert(`Added URL! "${AddURL}" (It's not fact now)`)
      })
      .catch((e) => window.alert("something error."))
    }else{
      window.alert("No data in the Form")
    }
    

  }
  


  const ShownData = Getter().then((res:any) => {
    const formatter = res.parse().map((element:any) => {
      
    })
    return formatter;
  })

  

  return (
    <>
      <Header title="Reader" />
      <StyledDiv>
        {/* Form追加 */}
        <Grid container spacing={0}>
          <Grid item xs={12} style={{ textAlign:'center', marginTop: '50px' }}>
            <Form ref={RSSFeedURL} placeholder='URL' />
            <Button label='Add' action={() => {AddRSSFeed()}} />
          </Grid>
        </Grid>
        
        {/* RSSContentをfor文で配置する */}
        {/* {ShownData} */}



      </StyledDiv>
    </>
  );
}

export default Top;
