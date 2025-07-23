import { render, screen } from '@testing-library/react';
import App from './App';

describe('Tests App Component', () => {
  test('Render App', () => {
    render(<App />);

    const searchComponent = screen.getByTestId('search');
    const main = screen.getByTestId('main');

    expect(searchComponent).toBeInTheDocument();
    expect(main).toBeInTheDocument();
  });
});
