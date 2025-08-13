import { useContext, useEffect, type MouseEvent } from 'react';
import style from './Pagination.module.scss';
import { ThemeContext } from '@/context';
import useGetCards from '@/hooks/useGetCards';
import useAppStore, { changePage, page, search } from '@/store/app';

import { useRouter, useSearchParams } from 'next/navigation';

function Pagination() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme } = useContext(ThemeContext);

  const currentPage = useAppStore(page);
  const setCurrentPage = useAppStore(changePage);
  const currentSearch = useAppStore(search);

  const { pages, isLoading } = useGetCards({
    name: currentSearch,
    page: currentPage,
  });

  useEffect(() => {
    if (searchParams) {
      const page = searchParams.get('page');
      if (page) {
        setCurrentPage(Number(page));
      }
    }
  }, [searchParams]);

  const handlerClick = (e: MouseEvent<HTMLDivElement>, pageNumber: number) => {
    e.stopPropagation();
    router.push(`${location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  return (
    <div
      className={[style.pagination, isLoading ? style.none : ''].join(' ')}
      data-testid="pagination"
    >
      {Array.from({ length: pages }).map((_, index) => {
        const pageNumber = index + 1;
        return (
          <div
            data-testid="pagination-item"
            onClick={(e: MouseEvent<HTMLDivElement>) => {
              handlerClick(e, pageNumber);
            }}
            className={[
              style.pagination__item,
              theme === 'dark'
                ? style.pagination__item__dark
                : style.pagination__item__light,
              pageNumber === currentPage
                ? theme === 'dark'
                  ? style.active__dark
                  : style.active__light
                : '',
            ].join(' ')}
            key={pageNumber}
          >
            {pageNumber}
          </div>
        );
      })}
    </div>
  );
}

export default Pagination;
