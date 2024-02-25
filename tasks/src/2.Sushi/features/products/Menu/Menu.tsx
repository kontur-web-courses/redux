import * as React from 'react';
import {Loader} from '@skbkontur/react-ui';
import products from '../../../api/products';
import {Status} from '../../../constants/Status';
import {Product} from '../Product/Product';
import {MenuFilter} from '../../chosenProducts/MenuFilter/MenuFilter';
import './Menu.css';

interface IMenuProps {
	readonly productsStatus?: number;
}

export const Menu: React.FC<IMenuProps> = ({productsStatus}) => {
	return (
		<Loader type="big" active={(productsStatus && productsStatus === Status.loading) || false}>
			<main className="menu">
				<MenuFilter />
				<div className="menuTableWrapper">
					<div className="menuTable">
						<Product key={1} product={products[1]} />
						<Product key={2} product={products[2]} />
					</div>
				</div>
				<MenuFilter />
			</main>
		</Loader>
	);
};
