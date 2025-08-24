import { vi } from 'vitest';

export const mockOnClose = vi.fn();
export const mockSetData = vi.fn();
export const file = new File(['hello'], 'avatar.png', { type: 'image/png' });
