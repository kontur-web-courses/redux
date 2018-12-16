import React from 'react';
import PropTypes from 'prop-types';
import Button from '@skbkontur/react-ui/Button';
import './styles.css';
import Link from '@skbkontur/react-ui/Link';
import Purchases from '../Purchases';

export default function Cart(props) {
  const { onOrder, onNavigateToMenu, ...rest } = props;
  if (props.purchases && props.purchases.length > 0) {
    return (
      <div>
        <Purchases {...props} />
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
  purchases: PropTypes.array,
  productsById: PropTypes.object,
  productsStatus: PropTypes.number,
  onDecreaseById: PropTypes.func,
  onIncreaseById: PropTypes.func,
  onOrder: PropTypes.func,
  onNavigateToMenu: PropTypes.func
};
