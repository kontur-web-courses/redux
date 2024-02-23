import React from 'react';
import {Tabs} from '@skbkontur/react-ui';
import Page from '../../../constants/Page';
import {navigateTo} from '../../index';
import {useDispatch, useSelector} from "react-redux";
import './Navigation.css';

export const Navigation = () => {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  const onNavigate = (nextPage) => dispatch(navigateTo(nextPage));

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

Navigation.propTypes = {};
