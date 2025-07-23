import { useState } from 'react';
import style from './Pagination.module.scss';
import type { GetCards } from '@/types';

interface PaginationProps {
  count: number;
  getCards: (params: GetCards) => void;
}

function Pagination({ count, getCards }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlerClick = async (pageNumber: number) => {
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
            onClick={() => {
              handlerClick(pageNumber);
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
