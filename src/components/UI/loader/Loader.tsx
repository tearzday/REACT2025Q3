import style from './Loader.module.scss';

function Loader() {
  return <div aria-label="Loading, please wait..." className={style.loader} />;
}

export default Loader;
