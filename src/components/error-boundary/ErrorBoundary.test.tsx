import { render, screen, waitFor } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';
import userEvent from '@testing-library/user-event';
import Main from '../main/Main';

const ProblemChildren = () => {
  throw new Error('Child component error');
};

describe('Error Boundary Tests', () => {
  test('Catches and handles JavaScript errors in child components and display fallback UI', () => {
    render(
      <ErrorBoundary>
        <ProblemChildren />
      </ErrorBoundary>
    );

    expect(screen.getByTestId('fallback')).toBeInTheDocument();
  });

  test('Logs error to console', () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ProblemChildren />
      </ErrorBoundary>
    );

    expect(consoleError).toHaveBeenCalled();
  });

  test('Error Button Tests', async () => {
    render(
      <ErrorBoundary>
        <Main cards={[]} loading={false} errorMessage="" />
      </ErrorBoundary>
    );

    const btn = screen.getByText('Call Error');

    await userEvent.click(btn);
    await waitFor(() =>
      expect(screen.getByTestId('fallback')).toBeInTheDocument()
    );
  });
});
