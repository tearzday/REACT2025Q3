import { Component } from 'react';
import classname from './Loader.module.scss';

class Loader extends Component {
  render() {
    return <div className={classname.loader}></div>;
  }
}

export default Loader;
