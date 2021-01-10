import React from 'react';
import {Tabs} from '@skbkontur/react-ui';
import Page from '../../constants/Page';
import './styles.css';

interface INavigationProps {
  page: string,
  onNavigate?: (page: string) => void
}

export default function Navigation({ page, onNavigate }: INavigationProps) {
  return (
    <nav className="navigation">
      <Tabs value={page} onValueChange={value => onNavigate && onNavigate(value)}>
        <Tabs.Tab id={Page.menu}>Меню</Tabs.Tab>
        <Tabs.Tab id={Page.cart}>Корзина</Tabs.Tab>
        <Tabs.Tab id={Page.orders}>Заказы</Tabs.Tab>
      </Tabs>
    </nav>
  );
}
