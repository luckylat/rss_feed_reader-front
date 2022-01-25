import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

export interface TextProps {
  value: string;
  size?: number;
  color?: string;//後でどうにかする
  height?: number;
}

function Text(props: TextProps) {
  const {
    value,
    size,
    color,
    height,
  } = props;
  const useStyles = () => makeStyles({
    title: {
      fontSize: size || 24,
      textAlign: 'center',
      color: color || "#ffffff",
      height: height || 100,
    },
  });
  const classes = useStyles()();
  return <div className={classes.title}>{value}</div>;
}

export default Text;
