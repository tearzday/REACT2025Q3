import classname from './Loader.module.scss';

function Loader() {
  return (
    <div
      data-testid="loader"
      aria-label="Loading, please wait..."
      className={classname.loader}
    />
  );
}

export default Loader;
