import APICard from '@/api/card';
import type { GetCards } from '@/types';
import { useQuery } from '@tanstack/react-query';

const useGetCards = ({ name, page }: GetCards) => {
  const { data, isLoading, error, isPending } = useQuery({
    queryKey: ['character', name, page],
    queryFn: () => APICard.getCards({ name, page }),
  });

  return {
    cards: data ? data.cards : [],
    pages: data ? data.total : 0,
    isLoading,
    error,
    isPending,
  };
};

export default useGetCards;
