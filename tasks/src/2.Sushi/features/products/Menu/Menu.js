import React from 'react';
import PropTypes from 'prop-types';
import {Loader} from '@skbkontur/react-ui';
import {useSelector} from 'react-redux';
import products from '../../../api/products';
import Status from '../../../constants/Status';
import {Product} from '../Product/Product';
import {MenuFilter} from '../../chosenProducts/MenuFilter/MenuFilter';
import {getProductIds, getProductStatus} from '../productsSlice';
import './Menu.css';

export const Menu = () => {
  const productIds = useSelector(getProductIds);
  const productsStatus = useSelector(getProductStatus);

  return (
    <Loader
      type="big"
      active={(productsStatus && productsStatus === Status.loading) || false}
    >
      <main className="menu">
        <MenuFilter />
        <div className="menuTableWrapper">
          <div className="menuTable">
            {productIds.map(productId => (
              <Product key={productId} productId={productId} />
            ))}
          </div>
        </div>
        <MenuFilter />
      </main>
    </Loader>
  );
};

Menu.propTypes = {
};
