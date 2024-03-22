import { InputHTMLAttributes } from 'react';

import css from './classnames';

const Input = (inputProps: InputHTMLAttributes<HTMLInputElement>): JSX.Element => (
  <input
    className={inputProps?.type === 'file' ? css.fileInput : css.input}
    type='text'
    {...inputProps}
  />
);

export default Input;
