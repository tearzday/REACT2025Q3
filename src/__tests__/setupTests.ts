import '@testing-library/jest-dom';

import { beforeEach, vi } from 'vitest';
import { mockCountries } from './__mocks__';

vi.mock('../src/hooks/useForms', () => {
  return {
    useForms: vi.fn(() => mockCountries),
  };
});

beforeEach(() => {
  vi.clearAllMocks();
});
