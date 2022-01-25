import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

export interface ImageProps {
  imageElement: string
  imageWidth?: number
  imageHeight?: number
}


function Image(props: ImageProps) {
  const {
    imageElement,
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
  return <img className={classes.image} src={"data:image/png;base64," + imageElement} />;
}

export default Image;
