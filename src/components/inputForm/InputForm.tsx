import React, { InputHTMLAttributes } from 'react';

import Input from '../input/Input';
import css from './classnames'

export interface InputFormProps {
  label: string;
  value: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  onChange: (v: string) => void;
}

const InputForm = ({ label, value, onChange, inputProps }: InputFormProps): JSX.Element => {
  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => onChange(e.currentTarget.value);
  return (
    <div className={css.container}>
      <label>{label}</label>
      <Input value={value} onChange={onInputChange} {...inputProps} />
    </div>
  );
}

export default InputForm;
