import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@skbkontur/react-icons/Add';
import RemoveIcon from '@skbkontur/react-icons/Remove';
import ShoppingCartSolidIcon from '@skbkontur/react-icons/ShoppingCartSolid';
import {Button, Input, Group, Gapped} from '@skbkontur/react-ui';
import './styles.css';
import PurchaseCounter from '../../components/PurchaseCounter';
import ProductTag from '../../constants/ProductTag';

export default class Product extends React.PureComponent {
  render() {
    const { product, purchase, onPay } = this.props;
    const quantity = (purchase && purchase.quantity) || 0;
    return (
      <div className="product">
        {this.renderTags(product.tags)}
        <img className="image" src={`/images/${product.image}`} />

        <div className="title">{product.name}</div>
        <div className="description">{product.description}</div>
        <div className="buy">
          <Gapped>
            <div className="price">{product.price} ₽</div>
            <PurchaseCounter
              value={quantity}
              onDecrease={this.handleDecrease}
              onIncrease={this.handleIncrease}
            />
            <Button use="pay" onClick={onPay}>
              <ShoppingCartSolidIcon />
            </Button>
          </Gapped>
        </div>
      </div>
    );
  }

  renderTags(tags) {
    return (
      <div className="tags">
        {tags.some(t => t === ProductTag.new) && (
          <div className="tag red">new</div>
        )}
        {tags.some(t => t === ProductTag.hot) && (
          <div className="tag orange">hot</div>
        )}
        {tags.some(t => t === ProductTag.veg) && (
          <div className="tag green">veg</div>
        )}
      </div>
    );
  }

  handleDecrease = () => {
    this.props.onDecrease && this.props.onDecrease(this.props.product.id);
  };

  handleIncrease = () => {
    this.props.onIncrease && this.props.onIncrease(this.props.product.id);
  };
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  purchase: PropTypes.object,
  onDecrease: PropTypes.func,
  onIncrease: PropTypes.func,
  onPay: PropTypes.func
};
