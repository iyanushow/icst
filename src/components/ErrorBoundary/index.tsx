import React, { ReactNode } from "react";

type State = {
  error: Error | null;
};

class ErrorBoundary extends React.Component<{ children: ReactNode }, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    this.setState({
      error: error,
    });
  }

  render() {
    return this.state.error ? (
      <div>Oops! An error occured</div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
