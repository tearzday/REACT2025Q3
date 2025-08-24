import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import HookForm from './HookForm';
import { file, mockOnClose } from '../../../__tests__/__mocks__';
import userEvent from '@testing-library/user-event';

describe('HookForm', () => {
  it('renders all form fields', () => {
    render(<HookForm onClose={mockOnClose} />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    expect(screen.getByLabelText(/Repeat Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Accept T&C/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Add img/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it('disables submit button when form is invalid', () => {
    render(<HookForm onClose={mockOnClose} />);
    expect(screen.getByRole('button', { name: /Submit/i })).toBeDisabled();
  });

  it('submits valid form and calls setData and onClose', async () => {
    render(<HookForm onClose={mockOnClose} />);
    fireEvent.input(screen.getByLabelText(/Name/i), {
      target: { value: 'John' },
    });
    fireEvent.input(screen.getByLabelText(/Age/i), { target: { value: '30' } });
    fireEvent.input(screen.getByLabelText(/Email/i), {
      target: { value: 'john@example.com' },
    });

    fireEvent.click(screen.getByLabelText(/Accept T&C/i));
    fireEvent.input(screen.getByLabelText(/Country/i), {
      target: { value: 'United States' },
    });

    const passwordInput = screen.getByLabelText('Password:');
    const passwordRepeatInput = screen.getByLabelText(/Repeat Password/i);
    fireEvent.change(passwordInput, { target: { value: 'Password123!' } });
    fireEvent.change(passwordRepeatInput, {
      target: { value: 'Password123!' },
    });
    expect((passwordInput as HTMLInputElement).value.length).toBe(12);
    expect((passwordRepeatInput as HTMLInputElement).value.length).toBe(12);
    fireEvent.click(screen.getByLabelText('Man'));
    const inputFile = screen.getByLabelText(/Add img/i);

    await userEvent.upload(inputFile, file);

    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /Submit/i })
      ).not.toBeDisabled();
    });

    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    await waitFor(() => {
      expect(mockOnClose).toHaveBeenCalled();
    });
  });
});
