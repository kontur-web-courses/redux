import React from 'react';
import PropTypes from 'prop-types';
import {Gapped, Loader} from '@skbkontur/react-ui';
import './styles.css';
import ProductTag from '../../constants/ProductTag';
import Status from '../../constants/Status';
import Purchase from '../Purchase';
import PurchasesTotalCost from '../PurchasesTotalCost';

export default function Purchases({
  // TODO: добавить нужные параметры
  productsStatus,
  onDecreaseById,
  onIncreaseById
}) {
  // TODO: сумма (цена * количество) по всем покупкам
  const totalCost = 123;

  // TODO: использовать заказанные продукты
  const fakeProduct = {
    id: -1,
    name: 'Поддельный ролл',
    description: 'Рис и водоросли',
    price: 50,
    image: 'salmon.jpg',
    tags: []
  };

  return (
    <Loader
      type="big"
      active={(productsStatus && productsStatus === Status.loading) || false}
    >
      <div>
        <div className="purchases">
          <Purchase
            key={fakeProduct.id}
            number={1}
            product={fakeProduct}
            quantity={3}
            onDecreaseById={onDecreaseById}
            onIncreaseById={onIncreaseById}
          />
          <Purchase
            key={fakeProduct.id}
            number={2}
            product={fakeProduct}
            quantity={5}
            onDecreaseById={onDecreaseById}
            onIncreaseById={onIncreaseById}
          />
          <PurchasesTotalCost totalCost={totalCost} />
        </div>
      </div>
    </Loader>
  );
}

Purchases.propTypes = {
  productsStatus: PropTypes.number,
  onDecreaseById: PropTypes.func,
  onIncreaseById: PropTypes.func
};
