import APICard from '@/api/card';
import { useQuery } from '@tanstack/react-query';

const useGetCardInfo = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['character', id],
    queryFn: () => APICard.getCardInfo(id),
    staleTime: 1000 * 60 * 5,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetCardInfo;
