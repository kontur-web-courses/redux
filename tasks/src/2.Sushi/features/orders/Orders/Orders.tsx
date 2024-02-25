import * as React from 'react';
import {Link} from '@skbkontur/react-ui';
import {Purchases} from '../../purchases/Purchases/Purchases';
import './Orders.css';

interface IOrdersProps {
	readonly orders?: any[];
	readonly productsStatus?: number;
	readonly onNavigateToMenu?: () => void;
}

export const Orders: React.FC<IOrdersProps> = ({
	// TODO: добавить нужные параметры
	orders,
	productsStatus,
	onNavigateToMenu,
}) => {
	if (orders && orders.length > 0) {
		return (
			<>
				{orders.map((order, index) => (
					<Purchases key={index} productsStatus={productsStatus} />
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
