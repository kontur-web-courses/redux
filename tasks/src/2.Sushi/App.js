import React from 'react';
import {Provider} from 'react-redux';
import Page from './constants/Page';
import {ErrorBoundary} from './components/ErrorBoundary/ErrorBoundary';
import {Navigation} from './features/navigation/Navigation/Navigation';
import {Pages} from './features/navigation/Pages/Pages';
import {api, store} from './app/store';

export const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Provider store={store}>
          <header className="header">
            <h1>Sushi &amp; Rolls</h1>
            <Navigation />
          </header>
          <Pages />
        </Provider>
      </ErrorBoundary>
    </div>
  );
};

App.propTypes = {};
