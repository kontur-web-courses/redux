import React from 'react';
import PropTypes from 'prop-types';
import {Button, Link} from '@skbkontur/react-ui';
import './Cart.css';
import {useDispatch, useSelector} from 'react-redux';
import {Purchases} from '../Purchases/Purchases';
import {changePurchaseQuantity} from '../purchasesSlice';
import {navigateTo} from "../../navigation/navigationSlice.js";
import Page from '../../../constants/Page';

export const Cart = (props) => {
  const { onOrder } = props;

  const productsById = useSelector((state) => state.products.byId);
  const productsStatus = useSelector((state) => state.products.status);
  const purchases = useSelector((state) => state.purchases);

  const dispatch = useDispatch();

  const onDecreaseById = (productId) => dispatch(changePurchaseQuantity({ productId, value: -1 }));
  const onIncreaseById = (productId) => dispatch(changePurchaseQuantity({ productId, value: 1 }));
  const onNavigateToMenu = () => dispatch(navigateTo(Page.menu));

  if (purchases && purchases.length > 0) {
    return (
      <div>
        <Purchases
          productsById={productsById}
          purchases={purchases}
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
};

Cart.propTypes = {
  onOrder: PropTypes.func
};
