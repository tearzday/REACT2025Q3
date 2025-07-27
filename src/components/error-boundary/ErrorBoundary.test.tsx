import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

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
});
