import { Component, type ReactNode } from 'react';

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
      return <div>Ошибка</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
