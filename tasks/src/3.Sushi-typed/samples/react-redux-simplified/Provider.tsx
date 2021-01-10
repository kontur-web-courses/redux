import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactReduxContext as Context } from './Context';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = { storeState: props.store.getState(), store: props.store };
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      const storeState = this.props.store.getState();
      this.setState(state =>
        state.storeState === storeState ? null : storeState
      );
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  }),
  context: PropTypes.object,
  children: PropTypes.any
};

export default Provider;
