import * as React from 'react';
import {Button, Link} from '@skbkontur/react-ui';
import './Cart.css';
import {Purchases} from '../Purchases/Purchases';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {changePurchaseQuantity} from '../purchasesSlice';
import {navigateTo} from '../../navigation/navigationSlice';
import {Page} from '../../../constants/Page';
import {order} from '../../orders/ordersSlice';

export const Cart: React.FC = () => {
	const productsById = useAppSelector((state) => state.products.byId);
	const productsStatus = useAppSelector((state) => state.products.status);
	const purchases = useAppSelector((state) => state.purchases);

	const dispatch = useAppDispatch();
	const onDecreaseById = (productId: number) => dispatch(changePurchaseQuantity({productId, value: -1}));
	const onIncreaseById = (productId: number) => dispatch(changePurchaseQuantity({productId, value: 1}));
	const onNavigateToMenu = () => dispatch(navigateTo(Page.menu));
	const onOrder = () => dispatch(order());

	if (purchases && purchases.length > 0) {
		return (
			<div>
				<Purchases
					productsById={productsById}
					purchases={purchases}
					productsStatus={productsStatus}
					onDecreaseById={onDecreaseById}
					onIncreaseById={onIncreaseById}
				/>
				<div className="orderButtonContainer">
					<Button use="pay" size="large" onClick={onOrder}>
						Заказать
					</Button>
				</div>
			</div>
		);
	}
	return (
		<div className="cartMessageContainer">
			Корзина пуста. Выберите что-нибудь из <Link onClick={onNavigateToMenu}>меню</Link>
		</div>
	);
};
