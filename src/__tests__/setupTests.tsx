import '@testing-library/jest-dom';
import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { dataCards } from './__mocks__/MockCard';

const queryClient = new QueryClient();

export const ContainerQuery = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

vi.mock('@/hooks/useGetCards', () => ({
  default: () => ({
    cards: dataCards.cards,
    pages: 10,
    isLoading: false,
    error: null,
    refetch: vi.fn(),
  }),
}));

beforeEach(() => {
  localStorage.clear();
});
