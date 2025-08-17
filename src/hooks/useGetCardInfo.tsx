import APICard from '@/app/api/card';
import { useQuery } from '@tanstack/react-query';

const useGetCardInfo = (id?: string) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['character', id],
    queryFn: () => APICard.getCardInfo(id || '1'),
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
    retry: false,
  });

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default useGetCardInfo;
