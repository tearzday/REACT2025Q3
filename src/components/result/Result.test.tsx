import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Result from './result';
import { mockData } from '@/__tests__/__mocks__';

vi.mock('@/hooks/useForms', () => ({
  useForms: () => mockData,
  formsGetData: vi.fn(),
}));

describe('Result component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all items from useForms', () => {
    render(<Result />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('renders image if file is a string', () => {
    render(<Result />);
    const img = screen.getByAltText('Image of John Doe') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('avatar.jpg');
  });

  it('does not render image if file is not a string', () => {
    render(<Result />);
    expect(screen.queryByAltText('Image of Jane Smith')).toBeNull();
  });

  it('renders correct user details', () => {
    render(<Result />);
    expect(screen.getByText('Email: john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Age: 30')).toBeInTheDocument();
    expect(screen.getByText('Gender: Male')).toBeInTheDocument();
    expect(screen.getByText('Country: USA')).toBeInTheDocument();

    expect(screen.getByText('Email: jane@example.com')).toBeInTheDocument();
    expect(screen.getByText('Age: 25')).toBeInTheDocument();
    expect(screen.getByText('Gender: Female')).toBeInTheDocument();
    expect(screen.getByText('Country: Canada')).toBeInTheDocument();
  });
});
