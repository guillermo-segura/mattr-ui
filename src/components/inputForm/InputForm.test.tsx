import { InputHTMLAttributes } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import InputForm, { InputFormProps } from './InputForm';
import css from './classnames';

jest.mock('../input/Input', () => ({
  __esModule: true,
  default: ({ value, onChange }: InputHTMLAttributes<HTMLInputElement>) => (
    <input data-testid="mocked-input" value={value} onChange={onChange} />
  ),
}));

describe('InputForm Component', () => {
  const onChangeMock = jest.fn();
  const inputFormProps: InputFormProps = {
    label: 'Test Label',
    value: '',
    onChange: onChangeMock,
  };

  test('renders input form with label', () => {
    render(<InputForm {...inputFormProps} />);
    const labelElement = screen.getByText(inputFormProps.label);
    expect(labelElement).toBeInTheDocument();
  });

  test('calls onChange function with input value', () => {
    render(<InputForm {...inputFormProps} />);
    const inputElement = screen.getByTestId('mocked-input');
    fireEvent.change(inputElement, { target: { value: 'test value' } });
    expect(onChangeMock).toHaveBeenCalledWith('test value');
  });

  test('has correct CSS class applied', () => {
    render(<InputForm {...inputFormProps} />);
    const containerElement = screen.getByTestId('inputform-container');
    expect(containerElement).toHaveClass(css.container);
  });
});
