import * as React from 'react';
import {Loader} from '@skbkontur/react-ui';
import {Status} from '../../../constants/Status';
import {PurchasesTotalCost} from '../PurchasesTotalCost/PurchasesTotalCost';
import {IProduct} from '../../../api/products';
import {IPurchaseState} from '../purchasesSlice';
import {Purchase} from '../Purchase/Purchase';
import './Purchases.css';

interface IProductQuantity {
	product: IProduct;
	quantity: number;
}

interface IPurchasesProps {
	readonly purchases?: IPurchaseState[];
	readonly productsById?: Record<number, IProduct>;
	readonly productsStatus?: number;
	readonly onDecreaseById?: (productId: number) => void;
	readonly onIncreaseById?: (productId: number) => void;
}

export const Purchases: React.FC<IPurchasesProps> = ({
	purchases,
	productsById,
	productsStatus,
	onDecreaseById,
	onIncreaseById,
}) => {
	const productAndQuantityPairs = merge(purchases || [], productsById || {});
	const totalCost = calculateTotalCost(productAndQuantityPairs);

	return (
		<Loader type="big" active={(productsStatus && productsStatus === Status.loading) || false}>
			<div>
				<div className="purchases">
					{productAndQuantityPairs.map(({product, quantity}, index) => (
						<Purchase
							key={product.id}
							number={index + 1}
							product={product}
							quantity={quantity}
							onDecreaseById={onDecreaseById}
							onIncreaseById={onIncreaseById}
						/>
					))}
					<PurchasesTotalCost totalCost={totalCost} />
				</div>
			</div>
		</Loader>
	);
};

function merge(purchases: IPurchaseState[], productsById: Record<number, IProduct>): IProductQuantity[] {
	return purchases
		.map((purchase) => {
			const product = productsById[purchase.id];
			const quantity = purchase.quantity;
			return product ? {product, quantity} : null;
		})
		.filter(notNull);
}

function notNull<TValue>(value: TValue | null): value is TValue {
	return value !== null;
}

function calculateTotalCost(pairs: IProductQuantity[]) {
	const addCost = (result: number, {product, quantity}: IProductQuantity) => result + product.price * quantity;
	return pairs.reduce(addCost, 0);
}
