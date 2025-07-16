import { Component, type ReactNode } from 'react';
import Button from '../UI/button/Button';
import styles from './ErrorBoundary.module.scss';

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = {
    isError: false,
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    if (this.state.isError) {
      return (
        <div className={styles.error}>
          <h2>Something went wrong behind the scenes.</h2>
          <Button onClick={() => window.location.reload()}>Refresh page</Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
