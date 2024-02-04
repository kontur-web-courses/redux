import React from 'react';
import PropTypes from 'prop-types';
import './ErrorBoundary.css';

export class ErrorBoundary extends React.Component {
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

ErrorBoundary.propTypes = {
  children: PropTypes.any
};
