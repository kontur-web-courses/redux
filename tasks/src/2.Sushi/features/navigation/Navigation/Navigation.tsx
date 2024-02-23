import * as React from 'react';
import {Tabs} from '@skbkontur/react-ui';
import {Page} from '../../../constants/Page';
import {navigateTo} from '../navigationSlice';
import {Dispatch} from 'redux';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import './Navigation.css';

export const Navigation: React.FC = () => {
	const page = useAppSelector((state) => state.page);
	const dispatch: Dispatch = useAppDispatch();

	const onNavigate = (value: Page) => {
		dispatch(navigateTo(value));
	};

	return (
		<nav className="navigation">
			<Tabs value={page} onValueChange={(value) => onNavigate && onNavigate(value)}>
				<Tabs.Tab id={Page.menu}>Меню</Tabs.Tab>
				<Tabs.Tab id={Page.cart}>Корзина</Tabs.Tab>
				<Tabs.Tab id={Page.orders}>Заказы</Tabs.Tab>
			</Tabs>
		</nav>
	);
};
