import * as React from 'react';
import styled from 'styled-components';

export interface FormProps {
  type?:string
  placeholder?:string
}

const StyledInput = styled.input`
  height: 2rem;
  width: 18rem;
`;

const Form = React.forwardRef((props: FormProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    type,
    placeholder
  } = props;
  return <StyledInput ref={ref} type={type || 'text'} placeholder={placeholder}/>
})

export default Form;
