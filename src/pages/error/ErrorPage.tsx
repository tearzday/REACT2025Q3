import Header from '@/components/header/Header';
import style from './ErrorPage.module.scss';

function ErrorPage() {
  return (
    <>
      <Header />
      <div className={style.error__page}>
        <div className={style.container}>
          <h2 className={style.title}>4</h2>
          <img className={style.img} src="/public/img/404.png" />
          <h2 className={style.title}>4</h2>
        </div>
        <h4 className={style.subtitle}>Oops! This page doesn&apos;t exist.</h4>
      </div>
    </>
  );
}

export default ErrorPage;
