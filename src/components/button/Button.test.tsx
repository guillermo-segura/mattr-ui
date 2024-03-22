import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import Button, { ButtonProps } from './Button';
import css from './classnames'

describe('Button Component', () => {
  const onClickMock = jest.fn();
  const buttonProps: ButtonProps = {
    label: 'Click me',
    onClick: onClickMock,
  };

  test('renders the Button component with correct label', () => {
    render(<Button {...buttonProps} />);
    const buttonElement = screen.getByText(buttonProps.label);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick function when button is clicked', () => {
    render(<Button {...buttonProps} />);
    const buttonElement = screen.getByText(buttonProps.label);
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('has correct CSS class applied', () => {
    render(<Button {...buttonProps} />);
    const buttonElement = screen.getByText(buttonProps.label);
    expect(buttonElement).toHaveClass(css.button);
  });
});
