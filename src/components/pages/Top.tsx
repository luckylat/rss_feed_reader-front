import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Grid } from '@material-ui/core';

import Header from '../organisms/Header'
import RSSContent from '../organisms/RSSContent'

import Form from '../atoms/Form'
import Button from '../atoms/Button'

import {Adder, Deleter, Getter} from '../../utils/Connecter';

const StyledDiv = styled.div`
  height: calc(100vh - 140px);
  width: 100vw;
`;

function Top() {
  const RSSFeedURL = React.createRef<HTMLInputElement>();
  const AddRSSFeed = () => {
    const AddURL = RSSFeedURL.current?.value;
    if(AddURL){
      Adder(AddURL).then((res) => {
        window.alert(`Added URL! "${AddURL}" (It's not fact now)`)
      })
      .catch((e) => window.alert("something error."))
    }else{
      window.alert("No data in the Form")
    }
    
  }

  const [shownData, setShownData] = useState(<div></div>)
  useEffect(() => {
    const f = async () => {
      const ret:any = [];
      let tmp:any = [];
      await Getter().then((res:any) => {

        res.data.map((element: any, index: number) => {
          tmp.push(
            <Grid item xs={3}>
              <RSSContent title={element.Title} URL={element.Link} fromURL={element.Rss} image={element.Image}/>
            </Grid>
          );
          if(index%3 === 2 && index !== 0){
            ret.push(
              <Grid container spacing={2} justifyContent="center">
                {Array(3).fill(null).map((_,j:number) => {
                  return tmp[j];
                })}
              </Grid>
            )
            tmp = []
          }
        })
        ret.push(
          <Grid container spacing={2} justifyContent="center">
            {Array(tmp.length).fill(null).map((_,j:number) => {
              return tmp[j];
            })}
          </Grid>
        )
        setShownData(ret);
      })
    }
    f();
  },[])
  

  return (
    <>
      <Header title="Reader" />
      <StyledDiv>
        {/* Form追加 */}
        <Grid container spacing={0}>
          <Grid item xs={12} style={{ textAlign:'center', marginTop: '50px', marginBottom: '50px' }}>
            <Form ref={RSSFeedURL} placeholder='URL' />
            <Button label='Add' action={() => {AddRSSFeed()}} />
          </Grid>
        </Grid>
        
        {/* RSSContentをfor文で配置する */}
        {shownData}


      </StyledDiv>
    </>
  );
}

export default Top;
