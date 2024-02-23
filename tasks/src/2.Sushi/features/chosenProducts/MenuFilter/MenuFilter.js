import React from 'react';
import {Gapped, Checkbox} from '@skbkontur/react-ui';
import './MenuFilter.css';
import {useDispatch, useSelector} from 'react-redux';
import ProductTag from '../../../constants/ProductTag';
import {changeProductTag} from '../chosenProductsSlice';

export const MenuFilter = () => {
  const chosenTags = useSelector((state) => state.chosenProducts.tags);
  const dispatch = useDispatch();

  const getIsOn = (productTag) => {
    return (
      chosenTags && chosenTags.some(tag => tag === productTag)
    );
  };

  const handleChange = (productTag) => {
    dispatch(changeProductTag(productTag));
  };

  return (
    <div className="menuFilterWrapper">
      <div className="menuFilter">
        <Gapped>
          Показать только
          <Checkbox
            checked={getIsOn(ProductTag.new)}
            onChange={() => handleChange(ProductTag.new)}
          >
            новое
          </Checkbox>
          <Checkbox
            checked={getIsOn(ProductTag.hot)}
            onChange={() => handleChange(ProductTag.hot)}
          >
            горячее
          </Checkbox>
          <Checkbox
            checked={getIsOn(ProductTag.veg)}
            onChange={() => handleChange(ProductTag.veg)}
          >
            вегетарианское
          </Checkbox>
        </Gapped>
      </div>
    </div>);
};

MenuFilter.propTypes = {
};
