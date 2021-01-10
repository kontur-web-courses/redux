import React, { Component, PureComponent } from 'react';
import { ReactReduxContext as Context } from './Context';
import selectorFactory from './selectorFactory';

function connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps, // по умолчанию { ...ownProps, ...stateProps, ...dispatchProps }
  { pure = true, ...extraOptions } = {}
) {
  return function wrapWithConnect(WrappedComponent) {
    const BaseComponent = pure ? PureComponent : Component;

    class Connect extends BaseComponent {
      constructor(props) {
        super(props);
        this.selectProps = makeDerivedPropsSelector();
        this.renderWrappedComponent = this.renderWrappedComponent.bind(this);
      }

      renderWrappedComponent(value) {
        const { storeState, store } = value;
        const derivedProps = this.selectProps(storeState, this.props, store);
        return <WrappedComponent {...derivedProps} />;
      }

      render() {
        return (
          <Context.Consumer>{this.renderWrappedComponent}</Context.Consumer>
        );
      }
    }

    function makeDerivedPropsSelector() {
      let lastProps;
      let lastState;
      let lastDerivedProps;
      let lastStore;
      let sourceSelector;

      return function selectDerivedProps(state, props, store) {
        if (pure && lastProps === props && lastState === state) {
          return lastDerivedProps;
        }

        if (store !== lastStore) {
          lastStore = store;
          sourceSelector = selectorFactory(store.dispatch, {
            mapStateToProps,
            mapDispatchToProps,
            mergeProps,
            pure,
            extraOptions,
            WrappedComponent
          });
        }

        lastProps = props;
        lastState = state;
        const nextProps = sourceSelector(state, props);
        if (lastDerivedProps !== nextProps) {
          lastDerivedProps = nextProps;
        }
        return lastDerivedProps;
      };
    }

    const wrappedComponentName =
      WrappedComponent.displayName || WrappedComponent.name || 'Component';
    Connect.displayName = `Connect(${wrappedComponentName})`;
    Connect.WrappedComponent = WrappedComponent;

    return Connect;
  };
}
