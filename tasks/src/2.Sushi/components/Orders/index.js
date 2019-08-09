import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Link from '@skbkontur/react-ui/Link';
import Purchases from '../../components/Purchases';

export default function Orders({
  orders,
  productsById,
  productsStatus,
  onNavigateToMenu
}) {
  if (orders && orders.length > 0) {
    return orders.map((order, index) => (
      <Purchases
        key={index}
        purchases={order}
        productsById={productsById}
        productsStatus={productsStatus}
      />
    ));
  }
  return (
    <div className="ordersMessageContainer">
      Нет заказов. Выберите что-нибудь из <Link onClick={onNavigateToMenu}>меню</Link>
    </div>
  );
}

Orders.propTypes = {
  orders: PropTypes.array,
  productsById: PropTypes.object,
  productsStatus: PropTypes.number,
  onNavigateToMenu: PropTypes.func
};
