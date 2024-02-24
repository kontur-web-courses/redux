import * as React from 'react';
import {Loader} from '@skbkontur/react-ui';
import {Status} from '../../../constants/Status';
import {Product} from '../Product/Product';
import {MenuFilter} from '../../chosenProducts/MenuFilter/MenuFilter';
import {useAppSelector} from '../../../app/hooks';
import './Menu.css';

export const Menu: React.FC = () => {
	const productIds = useAppSelector((state) => state.products.allIds);
	const productsStatus = useAppSelector((state) => state.products.status);

	return (
		<Loader type="big" active={(productsStatus && productsStatus === Status.loading) || false}>
			<main className="menu">
				<MenuFilter />
				<div className="menuTableWrapper">
					<div className="menuTable">
						{productIds.map((productId) => (
							<Product key={productId} productId={productId} />
						))}
					</div>
				</div>
				<MenuFilter />
			</main>
		</Loader>
	);
};
