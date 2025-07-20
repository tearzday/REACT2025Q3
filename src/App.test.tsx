import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Tests App Component', () => {
  test('Render App', () => {
    render(<App />);

    const searchComponent = screen.getByTestId('search');
    const main = screen.getByTestId('main');

    expect(searchComponent).toBeInTheDocument();
    expect(main).toBeInTheDocument();
  });

  test('View fallback', async () => {
    render(<App />);

    const btn = screen.getByText('Call Error');

    await userEvent.click(btn);
    await waitFor(() =>
      expect(screen.getByTestId('fallback')).toBeInTheDocument()
    );
  });
});
