import React from 'react';
import PropTypes from 'prop-types';
import {Gapped, Checkbox} from '@skbkontur/react-ui';
import './MenuFilter.css';
import ProductTag from '../../../constants/ProductTag';

export const MenuFilter = ({ chosenTags, onChange }) => {
  const getIsOn = (productTag) => {
    return (
      chosenTags && chosenTags.some(tag => tag === productTag)
    );
  };

  const handleChange = (productTag) => {
    onChange && onChange(productTag);
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
  chosenTags: PropTypes.array,
  onChange: PropTypes.func
};
