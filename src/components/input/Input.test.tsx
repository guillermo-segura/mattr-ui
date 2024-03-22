import { render, screen } from '@testing-library/react';

import Input from './Input';
import css from './classnames'

describe('Input Component', () => {
  test('renders input element with default type', () => {
    render(<Input />);
    const inputElement = screen.getByTestId('input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  test('applies correct class for text input', () => {
    render(<Input />);
    const inputElement = screen.getByTestId('input');
    expect(inputElement).toHaveClass(css.input);
  });

  test('applies correct class for file input', () => {
    render(<Input type="file" />);
    const fileInputElement = screen.getByTestId('input');
    expect(fileInputElement).toBeInTheDocument();
    expect(fileInputElement).toHaveClass(css.fileInput);
  });
});
