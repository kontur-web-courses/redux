import React from 'react';
import {Gapped, Checkbox} from '@skbkontur/react-ui';
import './styles.css';
import ProductTag from '../../constants/ProductTag';

interface IMenuFilterProps {
  chosenTags?: ProductTag[],
  onChange?: (productTag: ProductTag) => void
}

export default class MenuFilter extends React.Component<IMenuFilterProps> {
  render() {
    return (
      <div className="menuFilterWrapper">
        <div className="menuFilter">
          <Gapped>
            Показать только
            <Checkbox
              checked={this.getIsOn(ProductTag.new)}
              onChange={() => this.handleChange(ProductTag.new)}
            >
              новое
            </Checkbox>
            <Checkbox
              checked={this.getIsOn(ProductTag.hot)}
              onChange={() => this.handleChange(ProductTag.hot)}
            >
              горячее
            </Checkbox>
            <Checkbox
              checked={this.getIsOn(ProductTag.veg)}
              onChange={() => this.handleChange(ProductTag.veg)}
            >
              вегетарианское
            </Checkbox>
          </Gapped>
        </div>
      </div>
    );
  }

  getIsOn = productTag => {
    return (
      this.props.chosenTags &&
      this.props.chosenTags.some(tag => tag === productTag)
    );
  };

  handleChange = productTag => {
    this.props.onChange && this.props.onChange(productTag);
  };
}
