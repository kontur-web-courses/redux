import * as React from 'react';
import {Button, Link} from '@skbkontur/react-ui';
import './Cart.css';
import {Purchases} from '../Purchases/Purchases';

interface ICartProps {
	readonly productsStatus?: number;
	readonly onDecreaseById?: (productId: number) => void;
	readonly onIncreaseById?: (productId: number) => void;
	readonly onOrder?: () => void;
	readonly onNavigateToMenu?: () => void;
}

export const Cart: React.FC<ICartProps> = (props) => {
	const {onOrder, onNavigateToMenu, productsStatus, onDecreaseById, onIncreaseById} = props;
	// TODO: написать корректное условие, передать нужные параметры
	// eslint-disable-next-line no-constant-condition
	if (false) {
		return (
			<div>
				<Purchases productsStatus={productsStatus} onDecreaseById={onDecreaseById} onIncreaseById={onIncreaseById} />
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
