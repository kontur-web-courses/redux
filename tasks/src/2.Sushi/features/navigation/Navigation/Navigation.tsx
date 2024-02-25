import * as React from 'react';
import {Tabs} from '@skbkontur/react-ui';
import {Page} from '../../../constants/Page';
import './Navigation.css';

interface INavigationProps {
	readonly page: Page;
}

export const Navigation: React.FC<INavigationProps> = ({page}) => {
	const onNavigate = (value: Page) => {
		// TODO: добавить реализацию
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
