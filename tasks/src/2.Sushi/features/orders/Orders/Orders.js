import React from 'react';
import './Orders.css';
import {Link} from '@skbkontur/react-ui';
import {Purchases} from '../../purchases/Purchases/Purchases';
import {useDispatch, useSelector} from 'react-redux';
import {getProductStatus} from '../../products/productsSlice';
import {navigateTo} from "../../navigation/navigationSlice.js";
import Page from '../../../constants/Page';

export const Orders = () => {
  const orders = useSelector((state) => state.orders);
  const productsById = useSelector((state) => state.products.byId);
  const productsStatus = useSelector(getProductStatus);
  const dispatch = useDispatch();

  const onNavigateToMenu = () => dispatch(navigateTo(Page.menu));

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
};

Orders.propTypes = {
};
