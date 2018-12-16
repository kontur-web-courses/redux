import React from 'react';
import PropTypes from 'prop-types';
import Loader from '@skbkontur/react-ui/Loader';
import './styles.css';
import ProductTag from '../../constants/ProductTag';
import Status from '../../constants/Status';
import Product from '../../containers/Product';
import MenuFilter from '../../containers/MenuFilter';
import products from '../../api/products'

export default function Menu({ productsStatus, productIds }) {
  return (
    <Loader
      type="big"
      active={(productsStatus && productsStatus === Status.loading) || false}
    >
      <div className="menu">
        <MenuFilter />
        <div className="menuTable">
          {productIds.map(productId => (
            <Product key={productId} productId={productId} />
          ))}
        </div>
        <MenuFilter />
      </div>
    </Loader>
  );
}

Menu.propTypes = {
  productsStatus: PropTypes.number,
  productIds: PropTypes.array.isRequired
};
