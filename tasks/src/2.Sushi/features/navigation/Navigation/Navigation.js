import React from 'react';
import PropTypes from 'prop-types';
import {Tabs} from '@skbkontur/react-ui';
import Page from '../../../constants/Page';
import './Navigation.css';

export const Navigation = ({ page }) => {

  const onNavigate = () => {
    // TODO: добавить реализацию
  };

  return (
    <nav className="navigation">
      <Tabs value={page} onValueChange={value => onNavigate && onNavigate(value)}>
        <Tabs.Tab id={Page.menu}>Меню</Tabs.Tab>
        <Tabs.Tab id={Page.cart}>Корзина</Tabs.Tab>
        <Tabs.Tab id={Page.orders}>Заказы</Tabs.Tab>
      </Tabs>
    </nav>
  );
};

Navigation.propTypes = {
  page: PropTypes.string.isRequired
};
