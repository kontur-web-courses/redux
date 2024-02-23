import * as React from 'react';
import {Loader} from '@skbkontur/react-ui';
import products from '../../../api/products';
import {Status} from '../../../constants/Status';
import {Product} from '../Product/Product';
import {MenuFilter} from '../../chosenProducts/MenuFilter/MenuFilter';
import {useAppSelector} from '../../../app/hooks';
import './Menu.css';

interface IMenuProps {
	readonly productsStatus?: number;
}

export const Menu: React.FC<IMenuProps> = ({productsStatus}) => {
	const productIds = useAppSelector((state) => state.products.allIds);

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
