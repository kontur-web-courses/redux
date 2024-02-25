import * as React from 'react';
import {Page} from '../../../constants/Page';
import {Menu} from '../../products/Menu/Menu';
import {Cart} from '../../purchases/Cart/Cart';
import {Orders} from '../../orders/Orders/Orders';

interface IPagesProps {
	readonly page: string;
}

export const Pages: React.FC<IPagesProps> = ({page}) => {
	switch (page) {
		case Page.menu:
			return <Menu />;
		case Page.cart:
			return <Cart />;
		case Page.orders:
			return <Orders />;
		default:
			throw 'Unknown page';
	}
};
