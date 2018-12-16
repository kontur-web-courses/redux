import React from 'react';
import PropTypes from 'prop-types';
import Loader from '@skbkontur/react-ui/Loader';
import './styles.css';
import ProductTag from '../../constants/ProductTag';
import Status from '../../constants/Status';
import Product from '../../components/Product';
import MenuFilter from '../../components/MenuFilter';
import products from '../../api/products'

export default function Menu({ productsStatus }) {
  return (
    <Loader
      type="big"
      active={(productsStatus && productsStatus === Status.loading) || false}
    >
      <div className="menu">
        <MenuFilter />
        <div className="menuTable">
          <Product key={1} product={products[[1]]} />
          <Product key={2} product={products[[2]]} />
        </div>
        <MenuFilter />
      </div>
    </Loader>
  );
}

Menu.propTypes = {
  productsStatus: PropTypes.number
};
