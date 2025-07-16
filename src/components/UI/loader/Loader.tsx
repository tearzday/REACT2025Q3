import { Component } from 'react';
import classname from './Loader.module.scss';

class Loader extends Component {
  render() {
    return (
      <div
        data-testid="loader"
        aria-label="Loading, please wait..."
        className={classname.loader}
      ></div>
    );
  }
}

export default Loader;
