import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UncontrolledForm from './UncontrolledForm';
import { mockOnClose } from '../../../__tests__/__mocks__';
import userEvent from '@testing-library/user-event';

describe('UncontrolledForm', () => {
  it('renders all form fields', () => {
    render(<UncontrolledForm onClose={mockOnClose} />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    expect(screen.getByLabelText(/Repeat Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Man')).toBeInTheDocument();
    expect(screen.getByLabelText(/Woman/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Accept T&C/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Add img/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it('shows error', async () => {
    render(<UncontrolledForm onClose={mockOnClose} />);
    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() => {
      expect(
        screen.getByText('Name must start with an uppercase letter')
      ).toBeInTheDocument();
      expect(screen.getByText('Age must be a number')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Password is required')).toBeInTheDocument();
      expect(screen.getByText('Repeat password')).toBeInTheDocument();
      expect(screen.getByText('Only PNG and JPEG')).toBeInTheDocument();
      expect(screen.getByText('T&C is required')).toBeInTheDocument();
      expect(screen.getByText('Gender is required')).toBeInTheDocument();
      expect(screen.getByText('Select valid country')).toBeInTheDocument();
    });
  });

  it('shows password strength when password is entered', async () => {
    render(<UncontrolledForm onClose={mockOnClose} />);
    await userEvent.type(screen.getByLabelText('Password:'), 'StrongPass123!');

    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() => {
      expect(
        screen.getByText((t) => t.includes('Strength:')).textContent
      ).to.include('strong');
    });
  });
});
