import React from 'react';
import PropTypes from 'prop-types';
import {Button, Link} from '@skbkontur/react-ui';
import './styles.css';
import Purchases from '../Purchases';

export default function Cart(props) {
  const {
    onOrder,
    onNavigateToMenu,
    productsStatus,
    onDecreaseById,
    onIncreaseById
  } = props;
  // TODO: написать корректное условие, передать нужные параметры
  // eslint-disable-next-line no-constant-condition
  if (false) {
    return (
      <div>
        <Purchases
          productsStatus={productsStatus}
          onDecreaseById={onDecreaseById}
          onIncreaseById={onIncreaseById}
        />
        <div className="orderButtonContainer">
          <Button use="pay" size="large" onClick={onOrder}>
            Заказать
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="cartMessageContainer">
      Корзина пуста. Выберите что-нибудь из <Link onClick={onNavigateToMenu}>меню</Link>
    </div>
  );
}

Cart.propTypes = {
  productsStatus: PropTypes.number,
  onDecreaseById: PropTypes.func,
  onIncreaseById: PropTypes.func,
  onOrder: PropTypes.func,
  onNavigateToMenu: PropTypes.func
};
