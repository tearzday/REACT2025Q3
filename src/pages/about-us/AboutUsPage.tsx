import Header from '@/components/header/Header';
import style from './AboutUsPage.module.scss';

function AboutUsPage() {
  return (
    <>
      <Header />
      <div className={style.about__page} data-testid="about-page">
        <div className={style.card}>
          <h2>About us</h2>
          <p>Name: Daniil</p>
          <p>Year: 25</p>
          <p>Location: Saint-P</p>
          <p>GitHub: https://github.com/tearzday</p>
        </div>
        <div className={style.card}>
          <h2>RS School</h2>
          <p>Site: https://rs.school/</p>
          <p>Docs: https://rs.school/docs/en</p>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
