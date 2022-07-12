import React from "react";
import PropTypes from "prop-types";
import AddIcon from "@skbkontur/react-icons/Add";
import RemoveIcon from "@skbkontur/react-icons/Remove";
import ShoppingCartSolidIcon from "@skbkontur/react-icons/ShoppingCartSolid";
import {Button, Input, Group, Gapped} from "@skbkontur/react-ui";
import "./Product.css";
import {PurchaseCounter} from "../../purchases/PurchaseCounter/PurchaseCounter";
import ProductTag from "../../../constants/ProductTag";

export const Product = ({
  product,
  purchase,
  onDecrease,
  onIncrease,
  onPay
}) => {
  const renderTags = (tags) => {
    return (
      <div className="tags">
        {tags.some((t) => t === ProductTag.new) && (
          <div className="tag red">new</div>
        )}
        {tags.some((t) => t === ProductTag.hot) && (
          <div className="tag orange">hot</div>
        )}
        {tags.some((t) => t === ProductTag.veg) && (
          <div className="tag green">veg</div>
        )}
      </div>
    );
  };

  const handleDecrease = () => {
    onDecrease && onDecrease(product.id);
  };

  const handleIncrease = () => {
    onIncrease && onIncrease(product.id);
  };

  const quantity = (purchase && purchase.quantity) || 0;
  return (
    <div className="product">
      {renderTags(product.tags)}
      <img className="image" src={`/images/${product.image}`} />

      <div className="title">{product.name}</div>
      <div className="description">{product.description}</div>
      <div className="buy">
        <Gapped>
          <div className="price">{product.price} ₽</div>
          <PurchaseCounter
            value={quantity}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
          />
          <Button use="pay" onClick={onPay}>
            <ShoppingCartSolidIcon />
          </Button>
        </Gapped>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  purchase: PropTypes.object,
  onDecrease: PropTypes.func,
  onIncrease: PropTypes.func,
  onPay: PropTypes.func
};
