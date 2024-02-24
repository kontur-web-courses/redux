import * as React from 'react';
import ShoppingCartSolidIcon from '@skbkontur/react-icons/ShoppingCartSolid';
import {Button, Gapped} from '@skbkontur/react-ui';
import {PurchaseCounter} from '../../purchases/PurchaseCounter/PurchaseCounter';
import ProductTag from '../../../constants/ProductTag';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {changePurchaseQuantity} from '../../purchases/purchasesSlice';
import {navigateTo} from '../../navigation/navigationSlice';
import {Page} from '../../../constants/Page';
import './Product.css';

interface IProductProps {
	readonly productId: number;
}

export const Product: React.FC<IProductProps> = ({productId}) => {
	const product = useAppSelector((state) => state.products.byId[productId]);
	const purchase = useAppSelector((state) => (state.purchases || []).find((p) => p.id === productId));

	const dispatch = useAppDispatch();
	const onDecrease = () => dispatch(changePurchaseQuantity({productId: productId, value: -1}));
	const onIncrease = () => dispatch(changePurchaseQuantity({productId: productId, value: 1}));
	const onPay = () => dispatch(navigateTo(Page.cart));

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
		onDecrease();
	};

	const handleIncrease = () => {
		onIncrease();
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
