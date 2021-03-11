import React from 'react';
import PropTypes from 'prop-types';
import {Loader} from '@skbkontur/react-ui';
import './styles.css';
import ProductTag from '../../constants/ProductTag';
import Status from '../../constants/Status';
import Product from '../../containers/Product';
import MenuFilter from '../../containers/MenuFilter';
import products from '../../api/products'

export default function Menu({ productsStatus, productIds = [] }) {
  return (
    <Loader
      type="big"
      active={(productsStatus && productsStatus === Status.loading) || false}
    >
      <main className="menu">
        <MenuFilter />
        <div className="menuTableWrapper">
          <div className="menuTable">
            {
              productIds.map(id => <Product key={id} productId={id} />)
            }
          </div>
        </div>
        <MenuFilter />
      </main>
    </Loader>
  );
}

Menu.propTypes = {
  productsStatus: PropTypes.number,
  productIds: PropTypes.array
};
