import React from "react";

class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidCatch() {
    // log the error to the server
  }
  tryAgain = () => this.setState({ error: null });
  render() {
    return this.state.error ? <div>Oops! An error occured</div> : null;
  }
}

export default ErrorBoundary;
