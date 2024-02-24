import * as React from 'react';
import {Link} from '@skbkontur/react-ui';
import {Purchases} from '../../purchases/Purchases/Purchases';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {getProductStatus} from '../../products/productsSlice';
import {navigateTo} from '../../navigation/navigationSlice';
import {Page} from '../../../constants/Page';
import './Orders.css';

export const Orders: React.FC = () => {
	const orders = useAppSelector((state) => state.orders);
	const productsById = useAppSelector((state) => state.products.byId);
	const productsStatus = useAppSelector(getProductStatus);
	const dispatch = useAppDispatch();

	const onNavigateToMenu = () => dispatch(navigateTo(Page.menu));

	if (orders && orders.length > 0) {
		return (
			<>
				{orders.map((order, index) => (
					<Purchases key={index} productsStatus={productsStatus} purchases={order} productsById={productsById} />
				))}
			</>
		);
	}
	return (
		<div className="ordersMessageContainer">
			Нет заказов. Выберите что-нибудь из <Link onClick={onNavigateToMenu}>меню</Link>
		</div>
	);
};
