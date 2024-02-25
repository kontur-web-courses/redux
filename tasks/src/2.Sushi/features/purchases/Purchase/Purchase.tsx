import * as React from 'react';
import {Gapped} from '@skbkontur/react-ui';
import './Purchase.css';
import {PurchaseCounter} from '../PurchaseCounter/PurchaseCounter';
import {IProduct} from '../../../api/products';

interface IPurchaseProps {
	readonly number: number;
	readonly product: IProduct;
	readonly quantity: number;
	readonly onDecreaseById?: (productId: number) => void;
	readonly onIncreaseById?: (productId: number) => void;
}

export const Purchase: React.FC<IPurchaseProps> = ({number, product, quantity, onDecreaseById, onIncreaseById}) => {
	const cost = product.price * quantity;

	const handleDecrease = () => {
		onDecreaseById && onDecreaseById(product.id);
	};

	const handleIncrease = () => {
		onIncreaseById && onIncreaseById(product.id);
	};

	const renderQuantity = (quantity: number) => {
		const readonly = !onDecreaseById && !onIncreaseById;
		if (readonly) {
			return <div className="quantity">{quantity}</div>;
		}
		return <PurchaseCounter value={quantity} onDecrease={handleDecrease} onIncrease={handleIncrease} />;
	};

	return (
		<div className="purchase">
			<Gapped>
				<div className="number">{number}.</div>
				<div className="image">
					<img src={`/images/${product.image}`} />
				</div>
				<div className="title">{product.name}</div>
			</Gapped>
			<Gapped>
				<div className="price">{product.price} ₽</div>
				<div className="sign">&#xd7;</div>
				{renderQuantity(quantity)}
				<div className="sign">=</div>
				<div className="cost">{cost} ₽</div>
			</Gapped>
		</div>
	);
};
