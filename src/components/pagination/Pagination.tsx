import { useContext, useEffect, type MouseEvent } from 'react';
import style from './Pagination.module.scss';
import { useLocation, useNavigate, useSearchParams } from 'react-router';
import ThemeContext from '@/context';
import useGetCards from '@/hooks/useGetCards';
import useAppStore from '@/store/app';

function Pagination() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { theme } = useContext(ThemeContext);

  const currentPage = useAppStore((state) => state.currentPage);
  const setCurrentPage = useAppStore((state) => state.setCurrentPage);
  const currentSearch = useAppStore((state) => state.currentSearch);

  const { pages, isLoading } = useGetCards({
    name: currentSearch,
    page: String(currentPage),
  });

  useEffect(() => {
    const page = searchParams.get('page');
    if (page) {
      setCurrentPage(Number(page));
    }
  }, [searchParams]);

  const handlerClick = (e: MouseEvent<HTMLDivElement>, pageNumber: number) => {
    e.stopPropagation();
    navigate(`${location.pathname}?page=${pageNumber}`);
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
