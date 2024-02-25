import * as React from 'react';
import AddIcon from '@skbkontur/react-icons/Add';
import RemoveIcon from '@skbkontur/react-icons/Remove';
import {Button, Input, Group} from '@skbkontur/react-ui';
import './PurchaseCounter.css';

interface IPurchaseCounterProps {
	readonly value: number;

	onDecrease(): void;

	onIncrease(): void;
}

export const PurchaseCounter: React.FC<IPurchaseCounterProps> = ({value, onDecrease, onIncrease}) => {
	return (
		<Group>
			<Button onClick={onDecrease}>
				<RemoveIcon />
			</Button>
			<Input readOnly={true} width={50} align="center" value={value.toString()} />
			<Button onClick={onIncrease}>
				<AddIcon />
			</Button>
		</Group>
	);
};
