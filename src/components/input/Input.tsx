import React, { InputHTMLAttributes } from 'react';

const Input = (inputProps: InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
  return (
    <input className='border rounded-sm h-10 text-black pl-2 outline-0 w-80' type='text' {...inputProps} />
  );
};

export default Input;
