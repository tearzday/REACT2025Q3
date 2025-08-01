import { render, screen } from '@testing-library/react';
import ColorSwitch from './ColorSwitch';
import userEvent from '@testing-library/user-event';
import ThemeContext from '@/context';

describe('Test ColorSwitch', () => {
  test('Render', () => {
    render(<ColorSwitch />);

    expect(screen.getByTestId('color-switch')).toBeInTheDocument();
  });

  test('Toggle theme', async () => {
    const mockSetTheme = vi.fn();
    const mockValue = { theme: 'light', setTheme: mockSetTheme };

    render(
      <ThemeContext value={mockValue}>
        <ColorSwitch />
      </ThemeContext>
    );

    const switchElement = screen.getByTestId('color-switch');
    await userEvent.click(switchElement);

    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });
});
