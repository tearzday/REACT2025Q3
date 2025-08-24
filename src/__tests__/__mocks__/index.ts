import { vi } from 'vitest';

export const mockOnClose = vi.fn();
export const mockSetData = vi.fn();
export const file = new File(['hello'], 'avatar.png', { type: 'image/png' });

export const mockData = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    gender: 'Male',
    country: 'USA',
    file: 'avatar.jpg',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    age: 25,
    gender: 'Female',
    country: 'Canada',
    file: null,
  },
];
