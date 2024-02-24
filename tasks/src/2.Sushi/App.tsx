import * as React from 'react';
import {ErrorBoundary} from './components/ErrorBoundary/ErrorBoundary';
import {Navigation} from './features/navigation/Navigation/Navigation';
import {Pages} from './features/navigation/Pages/Pages';
import {Provider} from 'react-redux';
import {api, store} from './app/store';
import {useEffect} from 'react';
import {loadProductsRequest, loadProductsSuccess} from './features/products/productsSlice';

export const App = () => {
	useEffect(() => {
		store.dispatch(loadProductsRequest());
		api.fetchProducts().then((products) => {
			store.dispatch(loadProductsSuccess(products));
		});
	});

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
