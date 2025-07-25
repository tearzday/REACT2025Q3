import style from './Loader.module.scss';

function Loader() {
  return (
    <div
      data-testid="loader"
      aria-label="Loading, please wait..."
      className={style.loader}
    />
  );
}

export default Loader;
