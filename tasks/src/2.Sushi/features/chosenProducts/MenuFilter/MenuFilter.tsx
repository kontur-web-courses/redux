import * as React from 'react';
import {Checkbox, Gapped} from '@skbkontur/react-ui';
import ProductTag from '../../../constants/ProductTag';
import './MenuFilter.css';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {filterProductsByTag} from '../chosenProductsSlice';

export const MenuFilter: React.FC = () => {
	const chosenTags = useAppSelector((state) => state.chosenProducts.tags);
	const dispatch = useAppDispatch();

	const getIsOn = (productTag: number) => {
		return chosenTags && chosenTags.some((tag) => tag === productTag);
	};

	const handleChange = (productTag: number) => {
		dispatch(filterProductsByTag(productTag));
	};

	return (
		<div className="menuFilterWrapper">
			<div className="menuFilter">
				<Gapped>
					Показать только
					<Checkbox checked={getIsOn(ProductTag.new)} onChange={() => handleChange(ProductTag.new)}>
						новое
					</Checkbox>
					<Checkbox checked={getIsOn(ProductTag.hot)} onChange={() => handleChange(ProductTag.hot)}>
						горячее
					</Checkbox>
					<Checkbox checked={getIsOn(ProductTag.veg)} onChange={() => handleChange(ProductTag.veg)}>
						вегетарианское
					</Checkbox>
				</Gapped>
			</div>
		</div>
	);
};
