import React from "react";
import PropTypes from "prop-types";
import ShoppingCartSolidIcon from "@skbkontur/react-icons/ShoppingCartSolid";
import {Button, Gapped} from "@skbkontur/react-ui";
import "./Product.css";
import {useDispatch, useSelector} from 'react-redux';
import {PurchaseCounter} from "../../purchases/PurchaseCounter/PurchaseCounter";
import ProductTag from "../../../constants/ProductTag";
import {changePurchaseQuantity} from '../../purchases/purchasesSlice';
import {navigateTo} from "../../navigation/navigationSlice.js";
import Page from '../../../constants/Page';

export const Product = ({
  productId
}) => {
  const product = useSelector((state) => state.products.byId[productId]);
  const purchase = useSelector((state) => (state.purchases || []).find(p => p.id === productId));
  const dispatch = useDispatch();

  const onDecrease = () => dispatch(changePurchaseQuantity({ productId: productId, value: -1 }));
  const onIncrease = () => dispatch(changePurchaseQuantity({ productId: productId, value: 1 }));
  const onPay = () => dispatch(navigateTo(Page.cart));

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
  productId: PropTypes.number.isRequired
};
