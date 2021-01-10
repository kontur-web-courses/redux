import React from 'react';
import AddIcon from '@skbkontur/react-icons/Add';
import RemoveIcon from '@skbkontur/react-icons/Remove';
import {Button, Input, Group, Gapped} from '@skbkontur/react-ui';
import './styles.css';
import PurchaseCounter from '../PurchaseCounter';
import {IProduct} from "../../api/products";
import {ProductId} from "../../types/ProductId";

interface IPurchaseProps {
  number: number,
  product: IProduct,
  quantity: number,
  onDecreaseById?: (productId: ProductId) => void,
  onIncreaseById?: (productId: ProductId) => void
}

export default class Purchase extends React.PureComponent<IPurchaseProps> {
  render() {
    const { number, product, quantity } = this.props;
    const cost = product.price * quantity;
    return (
      <div className="purchase">
        <Gapped>
          <div className="number">{number}.</div>
          <div className="image">
            <img src={`/images/${product.image}`} />
          </div>
          <div className="title">{product.name}</div>
        </Gapped>
        <Gapped>
          <div className="price">{product.price} ₽</div>
          <div className="sign">&#xd7;</div>
          {this.renderQuantity(quantity)}
          <div className="sign">=</div>
          <div className="cost">{cost} ₽</div>
        </Gapped>
      </div>
    );
  }

  renderQuantity(quantity) {
    const readonly = !this.props.onDecreaseById && !this.props.onIncreaseById;
    if (readonly) {
      return <div className="quantity">{quantity}</div>;
    }
    return (
      <PurchaseCounter
        value={quantity}
        onDecrease={this.handleDecrease}
        onIncrease={this.handleIncrease}
      />
    );
  }

  handleDecrease = () => {
    this.props.onDecreaseById(this.props.product.id);
  };

  handleIncrease = () => {
    this.props.onIncreaseById(this.props.product.id);
  };
}
