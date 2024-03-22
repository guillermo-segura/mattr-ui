import { render, screen } from '@testing-library/react';

import { InputFormProps } from '../inputForm/InputForm';
import { ButtonProps } from '../button/Button';
import Form from './Form';
import css from './classnames';

jest.mock('../../hooks/useForm/useForm', () => ({
  __esModule: true,
  default: () => ({
    values: {
      givenName: 'John',
      email: 'john@example.com',
      countryOfResidence: 'USA',
      dateOfBirth: '1990-01-01',
      photo: '',
    },
    setGivenName: jest.fn(),
    setEmail: jest.fn(),
    setCountryOfResidence: jest.fn(),
    setDateOfBirth: jest.fn(),
    setPhoto: jest.fn(),
    submitValues: jest.fn(),
  }),
}));

jest.mock('../inputForm/InputForm', () => ({ label, value, onChange, inputProps }: InputFormProps) => (
  <input
    data-testid={`input-${label.toLowerCase().replace(/\s/g, '-')}`}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    {...inputProps}
  />
));

jest.mock('../button/Button', () => ({ label, onClick }: ButtonProps) => (
  <button data-testid="submit-button" onClick={onClick}>{label}</button>
));

describe('Form Component', () => {
  test('has correct CSS class applied', () => {
    render(<Form />);
    const containerElement = screen.getByTestId('form-container');
    expect(containerElement).toHaveClass(css.container);
  });

  test('renders form with input fields and submit button', () => {
    render(<Form />);
    expect(screen.getByTestId('input-given-name')).toHaveValue('John');
    expect(screen.getByTestId('input-email')).toHaveValue('john@example.com');
    expect(screen.getByTestId('input-country-of-residence')).toHaveValue('USA');
    expect(screen.getByTestId('input-date-of-birth')).toHaveValue('1990-01-01');
    expect(screen.getByTestId('input-photo')).toHaveValue('');
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });  
});
