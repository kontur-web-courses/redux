import React, {ErrorInfo} from 'react';
import './styles.css';

interface IErrorBoundaryState {
  error: Error | null,
  errorInfo: ErrorInfo | null
}

export default class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
        debugger;
      return (
        <div className="errorBoundaryWrapper">
          <h2>Что-то пошло не так...</h2>
          <div className="errorBoundaryMessage">
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
