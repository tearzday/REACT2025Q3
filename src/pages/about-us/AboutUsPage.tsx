import Header from '@/components/header/Header';
import style from './AboutUsPage.module.scss';
import { Link } from 'react-router';

function AboutUsPage() {
  return (
    <>
      <Header />
      <div className={style.about__page} data-testid="about-page">
        <div className={style.card}>
          <h2>About us</h2>
          <p>
            <b>Name:</b> Daniil
          </p>
          <p>
            <b>Year:</b> 25
          </p>
          <p>
            <b>Location:</b> Saint-Petersburg
          </p>
          <p>
            <b>GitHub:</b>{' '}
            <Link className={style.link} to="https://github.com/tearzday">
              tearzday
            </Link>
          </p>
        </div>
        <div className={style.card}>
          <h2>RS School</h2>
          <p>
            <b>Course:</b>{' '}
            <Link className={style.link} to="https://rs.school/courses/reactjs">
              Click
            </Link>
          </p>
          <p>
            <b>Docs:</b>{' '}
            <Link className={style.link} to="https://rs.school/docs/en">
              Click
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
