import React from 'react';
import Page from './constants/Page';
import {ErrorBoundary} from './components/ErrorBoundary/ErrorBoundary';
import {Navigation} from './features/navigation/Navigation/Navigation';
import {Pages} from './features/navigation/Pages/Pages';

export const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <header className="header">
          <h1>Sushi &amp; Rolls</h1>
          <Navigation page={Page.menu} />
        </header>
        <Pages page={Page.menu} />
      </ErrorBoundary>
    </div>
  );
};

App.propTypes = {};
