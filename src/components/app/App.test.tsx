import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('../form/Form', () => () => <div data-testid="form-component"></div>);

describe('App Component', () => {
  test('renders the App component', () => {
    render(<App />);
    const appContainer = screen.getByTestId('app-container');
    expect(appContainer).toBeInTheDocument();
  });

  test('renders the Form component inside App', () => {
    render(<App />);
    const formComponent = screen.getByTestId('form-component');
    expect(formComponent).toBeInTheDocument();
  });

  test('renders the logo inside the navbar', () => {
    render(<App />);
    const logoElement = screen.getByTestId('navbar-logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', 'https://www.datocms-assets.com/38428/1646191640-logo-block.svg');
    expect(logoElement).toHaveAttribute('alt', 'logo');
  });
});
