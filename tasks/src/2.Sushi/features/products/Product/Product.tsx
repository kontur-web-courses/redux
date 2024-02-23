import * as React from 'react';
import ShoppingCartSolidIcon from '@skbkontur/react-icons/ShoppingCartSolid';
import {Button, Gapped} from '@skbkontur/react-ui';
import {PurchaseCounter} from '../../purchases/PurchaseCounter/PurchaseCounter';
import ProductTag from '../../../constants/ProductTag';
import {useAppSelector} from '../../../app/hooks';
import './Product.css';

interface IProductProps {
	readonly productId: number;
	readonly purchase?: any;
	readonly onDecrease?: (productId: number) => void;
	readonly onIncrease?: (productId: number) => void;
	readonly onPay?: () => void;
}

export const Product: React.FC<IProductProps> = ({productId, purchase, onDecrease, onIncrease, onPay}) => {
	const product = useAppSelector((state) => state.products.byId[productId]);
	const renderTags = (tags: number[]) => {
		return (
			<div className="tags">
				{tags.some((t) => t === ProductTag.new) && <div className="tag red">new</div>}
				{tags.some((t) => t === ProductTag.hot) && <div className="tag orange">hot</div>}
				{tags.some((t) => t === ProductTag.veg) && <div className="tag green">veg</div>}
			</div>
		);
	};

	const handleDecrease = () => {
		onDecrease && onDecrease(product.id);
	};

	const handleIncrease = () => {
		onIncrease && onIncrease(product.id);
	};

	const quantity = (purchase && purchase.quantity) || 0;
	return (
		<div className="product">
			{renderTags(product.tags)}
			<img alt={`product ${product.name}`} className="image" src={`/images/${product.image}`} />

			<div className="title">{product.name}</div>
			<div className="description">{product.description}</div>
			<div className="buy">
				<Gapped>
					<div className="price">{product.price} ₽</div>
					<PurchaseCounter value={quantity} onDecrease={handleDecrease} onIncrease={handleIncrease} />
					<Button use="pay" onClick={onPay}>
						<ShoppingCartSolidIcon />
					</Button>
				</Gapped>
			</div>
		</div>
	);
};
