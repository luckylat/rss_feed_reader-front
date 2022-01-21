import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

export interface image{
  imageURL?: any //後で確認(とりあえずURLを指定する)
  imageWidth?: number
  imageHeight?: number
}

export interface ImageProps {
  image: image
}

function Image(props: ImageProps) {
  const {
    imageURL,
    imageWidth,
    imageHeight,
  } = props.image;
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
