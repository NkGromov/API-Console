import React from 'react';
import {Input, InputTitle, InputWrapper, TextWrapper} from './inputsStyle';

const Inputs = (title: string, name: string, type: string, errors: string = '') => {
  return (
    <InputWrapper>
      <TextWrapper>
        <InputTitle {...(errors && {color: '#CF2C00'})}>{title}</InputTitle>
      </TextWrapper>
      <Input name={name} type={type} placeholder={title} {...(errors && {color: '#CF2C00'})} />
    </InputWrapper>
  );
};

export default Inputs;
