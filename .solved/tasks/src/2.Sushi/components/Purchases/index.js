import React from 'react';
import PropTypes from 'prop-types';
import Gapped from '@skbkontur/react-ui/Gapped';
import Loader from '@skbkontur/react-ui/Loader';
import './styles.css';
import ProductTag from '../../constants/ProductTag';
import Status from '../../constants/Status';
import Purchase from '../Purchase';

export default function Purchases({
  purchases,
  productsById,
  productsStatus,
  onDecreaseById,
  onIncreaseById
}) {
  const pairs = merge(purchases || [], productsById || {});
  const total = calculateTotal(pairs);
  return (
    <Loader
      type="big"
      active={(productsStatus && productsStatus === Status.loading) || false}
    >
      <div>
        <div className="purchases">
          {pairs.map(({ purchase, product }, index) =>
            renderPurchase(purchase, product, index, onDecreaseById, onIncreaseById)
          )}
          {renderTotal(total)}
        </div>
      </div>
    </Loader>
  );
}

Purchases.propTypes = {
  purchases: PropTypes.array,
  productsById: PropTypes.object,
  productsStatus: PropTypes.number,
  onDecreaseById: PropTypes.func,
  onIncreaseById: PropTypes.func
};

function renderPurchase(purchase, product, index, onDecreaseById, onIncreaseById) {
  return (
    <Purchase
      key={product.id}
      number={index + 1}
      product={product}
      purchase={purchase}
      onDecreaseById={onDecreaseById}
      onIncreaseById={onIncreaseById}
    />
  );
}

function renderTotal(total) {
  return (
    <div className="purchasesTotal">
      <Gapped>
        <div className="title">Всего</div>
        <div className="sign">=</div>
        <div className="cost">{total} ₽</div>
      </Gapped>
    </div>
  );
}

function merge(purchases, productsById) {
  return purchases
    .map(purchase => {
      const product = productsById[purchase.id];
      return product ? { purchase, product } : null;
    })
    .filter(pair => pair !== null);
}

function calculateTotal(pairs) {
  const addCost = (result, { purchase, product }) =>
    result + product.price * purchase.quantity;
  return pairs.reduce(addCost, 0);
}
