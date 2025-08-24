import { beforeEach, vi } from 'vitest';
import { mockSetData } from './__mocks__';

vi.mock('../../../hooks/useForms', () => ({
  useForms: () => mockSetData,
  formsSetData: {},
}));

vi.mock('../../../utils/convertToBase64', () => ({
  default: vi.fn(() => Promise.resolve('base64string')),
}));

vi.mock('../../../utils/showPasswordStrength', () => ({
  getPasswordStrength: vi.fn(() => 'Strong'),
}));

vi.mock('../../../data/countries', () => ({
  countries: ['USA', 'Canada'],
}));

beforeEach(() => {
  vi.clearAllMocks();
});
