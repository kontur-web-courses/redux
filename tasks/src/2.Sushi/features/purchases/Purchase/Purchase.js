import React from "react";
import PropTypes from "prop-types";
import {Gapped} from "@skbkontur/react-ui";
import "./Purchase.css";
import {PurchaseCounter} from "../PurchaseCounter/PurchaseCounter";

export const Purchase = ({
  number,
  product,
  quantity,
  onDecreaseById,
  onIncreaseById
}) => {
  const cost = product.price * quantity;

  const renderQuantity = (quantity) => {
    const readonly = !onDecreaseById && !onIncreaseById;
    if (readonly) {
      return <div className="quantity">{quantity}</div>;
    }
    return (
      <PurchaseCounter
        value={quantity}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
      />
    );
  };

  const handleDecrease = () => {
    onDecreaseById(product.id);
  };

  const handleIncrease = () => {
    onIncreaseById(product.id);
  };

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
        {renderQuantity(quantity)}
        <div className="sign">=</div>
        <div className="cost">{cost} ₽</div>
      </Gapped>
    </div>
  );
};

Purchase.propTypes = {
  number: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  onDecreaseById: PropTypes.func,
  onIncreaseById: PropTypes.func
};
