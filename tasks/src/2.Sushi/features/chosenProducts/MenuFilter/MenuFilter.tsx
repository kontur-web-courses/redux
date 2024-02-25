import * as React from 'react';
import {Gapped, Checkbox} from '@skbkontur/react-ui';
import ProductTag from '../../../constants/ProductTag';
import './MenuFilter.css';

interface IMenuFilterProps {
	readonly chosenTags?: any[];
	readonly onChange?: (productId: number) => void;
}

export const MenuFilter: React.FC<IMenuFilterProps> = ({chosenTags, onChange}) => {
	const getIsOn = (productTag: number) => {
		return chosenTags && chosenTags.some((tag) => tag === productTag);
	};

	const handleChange = (productTag: number) => {
		onChange && onChange(productTag);
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
