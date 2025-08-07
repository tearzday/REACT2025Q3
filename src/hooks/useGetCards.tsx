import type { GetCards } from '@/types';
import { useQuery } from '@tanstack/react-query';

const useGetCards = ({ name, page }: GetCards = { name: 'q', page: '1' }) => {
  const { data, isLoading, error, isPending } = useQuery({
    queryKey: ['character', name, page],
    queryFn: () =>
      fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`
      ).then((res) => res.json()),
  });

  return {
    cards: data ? data.results : [],
    pages: data ? data.info.pages : 1,
    isLoading,
    error: error,
    isPending,
  };
};

export default useGetCards;
