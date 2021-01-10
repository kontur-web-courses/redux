import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ReactReduxContext as Context } from './Context';

function selectorFactory(
  dispatch,
  { mapStateToProps, mapDispatchToProps, mergeProps, ...options }
) {
  return function selector(state, ownProps) {
    // impure версия
    return mergeProps(
      mapStateToProps(state, ownProps),
      mapDispatchToProps(dispatch, ownProps),
      ownProps
    );
  };
}

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = { storeState: props.store.getState(), store: props.store };
  } // storeState нужен, чтобы обновлять контекст при изменениях
  componentDidMount() {
    this.props.store.subscribe(() => {
      const storeState = this.props.store.getState();
      this.setState(state =>
        state.storeState !== storeState ? storeState : null
      );
    });
  } // любое изменение store.getState() приводит к изменению state и контекста
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  } // далее другие методы класса
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

function makeDerivedPropsSelector() {}

function withStore(selectProps, WrappedComponent) {
  // на pure не влияет setState в Provider, если не изменились значения props
  class Connect extends PureComponent {
    renderWrappedComponent = contextValue => {
      const { storeState, store } = contextValue;
      // selectProps пусть выбирает нужное из store
      const derivedProps = selectProps(storeState, this.props, store);
      return <WrappedComponent {...derivedProps} />;
    };
    render() {
      return <Context.Consumer>{this.renderWrappedComponent}</Context.Consumer>;
    }
  }
  return Connect;
}

function connect(mapStateToProps, mapDispatchToProps,
  mergeProps, // по умолчанию { ...ownProps, ...stateProps, ...dispatchProps }
  { pure = true, ...extraOptions } = {}
) {
  return function wrapWithConnect(WrappedComponent) {
    function makeDerivedPropsSelector() {
      return function selectDerivedProps(state, props, store) {
        // используется selectorFactory с переданными mapStateToProps, mapDispatchToProps, mergeProps и другими опциями
        /* ... */
      };
    }
    const BaseComponent = pure ? PureComponent : Component;
    return class Connect extends BaseComponent {
      constructor(props) {
        super(props);
        this.selectProps = makeDerivedPropsSelector();
      }
      /* ... */
    }
  };
}
