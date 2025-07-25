import { useEffect, useState } from 'react';
import style from './Pagination.module.scss';
import type { GetCards } from '@/types';
import { useLocation, useNavigate, useSearchParams } from 'react-router';

interface PaginationProps {
  count: number;
  getCards: (params: GetCards) => void;
}

function Pagination({ count, getCards }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const page = searchParams.get('page');
    if (page) {
      setCurrentPage(Number(page));
    }
  }, [searchParams]);

  const handlerClick = async (
    e: React.MouseEvent<HTMLDivElement>,
    pageNumber: number
  ) => {
    e.stopPropagation();
    navigate(`${location.pathname}?page=${pageNumber}`);
    getCards({ page: String(pageNumber) });
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.pagination} data-testid="pagination">
      {Array.from({ length: count }).map((_, index) => {
        const pageNumber = index + 1;
        return (
          <div
            data-testid="pagination-item"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              handlerClick(e, pageNumber);
            }}
            className={[
              style.pagination__item,
              pageNumber === currentPage ? style.active : '',
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
