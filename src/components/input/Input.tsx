import { InputHTMLAttributes } from 'react';

import { input, fileInput } from './styles';

const Input = (inputProps: InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
  return (
    <input className={inputProps.type === 'file' ? fileInput : input} type='text' {...inputProps} />
  );
};

export default Input;
