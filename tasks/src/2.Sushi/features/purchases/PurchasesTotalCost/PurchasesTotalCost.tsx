import * as React from 'react';
import './PurchasesTotalCost.css';
import {Gapped} from '@skbkontur/react-ui';

interface IPurchasesTotalCostProps {
	readonly totalCost: number;
}

export const PurchasesTotalCost: React.FC<IPurchasesTotalCostProps> = ({totalCost}) => {
	return (
		<div className="purchasesTotalCost">
			<Gapped>
				<div className="title">Всего</div>
				<div className="sign">=</div>
				<div className="cost">{totalCost} ₽</div>
			</Gapped>
		</div>
	);
};
