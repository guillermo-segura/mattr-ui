import React, { InputHTMLAttributes } from 'react';

import { getIdFromLabel } from '../../utils/utils';
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
  const id = `inputform-${getIdFromLabel(label)}`;
  return (
    <div className={css.container} data-testid="inputform-container">
      <label htmlFor={id} className={css.label}>{label}</label>
      <Input
        id={id}
        data-testid={id}
        value={value}
        onChange={onInputChange}
        {...inputProps}
      />
    </div>
  );
}

export default InputForm;
