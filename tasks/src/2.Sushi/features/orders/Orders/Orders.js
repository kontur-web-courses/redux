import React from 'react';
import PropTypes from 'prop-types';
import './Orders.css';
import {Link} from '@skbkontur/react-ui';
import {Purchases} from '../../purchases/Purchases/Purchases';

export const Orders = ({
  // TODO: добавить нужные параметры
  orders,
  productsStatus,
  onNavigateToMenu
}) => {
  if (orders && orders.length > 0) {
    return orders.map((order, index) => (
      <Purchases
        key={index}
        productsStatus={productsStatus}
      />
    ));
  }
  return (
    <div className="ordersMessageContainer">
      Нет заказов. Выберите что-нибудь из <Link onClick={onNavigateToMenu}>меню</Link>
    </div>
  );
};

Orders.propTypes = {
  orders: PropTypes.array,
  productsStatus: PropTypes.number,
  onNavigateToMenu: PropTypes.func
};
