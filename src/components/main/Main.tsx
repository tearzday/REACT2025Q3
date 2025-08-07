import CardList from '../card-list/CardList';
import style from './Main.module.scss';
import Pagination from '../pagination/Pagination';
import { useNavigate, useSearchParams } from 'react-router';

function Main() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const closeDetails = () => {
    const page = searchParams.get('page');
    if (page) {
      navigate(`/?page=${page}`);
    }
  };

  return (
    <main className={style.main} data-testid="main" onClick={closeDetails}>
      <CardList />
      <Pagination />
    </main>
  );
}

export default Main;
