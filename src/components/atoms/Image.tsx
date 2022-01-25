import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';


export interface ImageProps {
  imageURL: string
  imageWidth?: number
  imageHeight?: number
}

export const defaultimage:ImageProps = {
  imageURL: 'https://1.bp.blogspot.com/-vsrjLB8Wyng/YEGP_R749_I/AAAAAAABdck/-khfythfWqU5wb6X4FzfzeaJVhIztvByACNcBGAsYHQ/s180-c/buranko_boy_sad.png'
}

function Image(props: ImageProps) {
  const {
    imageURL,
    imageWidth,
    imageHeight,
  } = props;
  const useStyles = () => makeStyles({
    image: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: imageWidth || "128px",
      height: imageHeight || "128px",
    },
  });
  const classes = useStyles()();
  return <img className={classes.image} src={imageURL} />;
}

export default Image;
