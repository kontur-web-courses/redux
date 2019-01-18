import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@skbkontur/react-ui/Tabs';
import Page from '../../constants/Page';
import './styles.css';

export default function Navigation({ page, onNavigate }) {
  return (
    <nav className="navigation">
      <Tabs value={page} onChange={event => onNavigate && onNavigate(event.target.value)}>
        <Tabs.Tab id={Page.menu}>Меню</Tabs.Tab>
        <Tabs.Tab id={Page.cart}>Корзина</Tabs.Tab>
        <Tabs.Tab id={Page.orders}>Заказы</Tabs.Tab>
      </Tabs>
    </nav>
  );
}

Navigation.propTypes = {
  page: PropTypes.string.isRequired,
  onNavigate: PropTypes.func
};
