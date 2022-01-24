import * as React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  label: string;
  action: () => void;
}

const Theme = {
  primary: '#8187DC',
};

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;



  height: 2rem;
  width: 5rem;
`;

function Button(props: ButtonProps) {
  const {
    label,
    action,
  } = props;
  return <StyledButton onClick={() => action()}>{label}</StyledButton>;
}

export default Button;
