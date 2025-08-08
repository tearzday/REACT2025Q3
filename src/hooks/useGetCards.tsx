import APICard from '@/api/card';
import type { GetCards } from '@/types';
import { useQuery } from '@tanstack/react-query';

const useGetCards = ({ name, page }: GetCards) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['character', name, page],
    queryFn: () => APICard.getCards({ name, page }),
    enabled: true,
    staleTime: 1000 * 60 * 5,
  });

  return {
    cards: data ? data.cards : [],
    pages: data ? data.total : 0,
    isLoading,
    error,
    refetch,
  };
};

export default useGetCards;
