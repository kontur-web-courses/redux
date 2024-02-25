import React from "react";
import PropTypes from "prop-types";
import {Gapped, Loader} from "@skbkontur/react-ui";
import "./Purchases.css";
import Status from "../../../constants/Status";
import {Purchase} from "../Purchase/Purchase";
import {PurchasesTotalCost} from "../PurchasesTotalCost/PurchasesTotalCost";

export const Purchases = ({
  purchases,
  productsById,
  productsStatus,
  onDecreaseById,
  onIncreaseById
}) => {
  const productAndQuantityPairs = merge(purchases || [], productsById || {});
  const totalCost = calculateTotalCost(productAndQuantityPairs);

  return (
    <Loader
      type="big"
      active={(productsStatus && productsStatus === Status.loading) || false}
    >
      <div>
        <div className="purchases">
          {productAndQuantityPairs.map(({ product, quantity }, index) => (
            <Purchase
              key={product.id}
              number={index + 1}
              product={product}
              quantity={quantity}
              onDecreaseById={onDecreaseById}
              onIncreaseById={onIncreaseById}
            />
          ))}
          <PurchasesTotalCost totalCost={totalCost} />
        </div>
      </div>
    </Loader>
  );
};

Purchases.propTypes = {
  purchases: PropTypes.array,
  productsById: PropTypes.object,
  productsStatus: PropTypes.number,
  onDecreaseById: PropTypes.func,
  onIncreaseById: PropTypes.func
};

function merge(purchases, productsById) {
  return purchases
    .map(purchase => {
      const product = productsById[purchase.id];
      const quantity = purchase.quantity;
      return product ? { product, quantity } : null;
    })
    .filter(pair => pair !== null);
}

function calculateTotalCost(pairs) {
  const addCost = (result, { product, quantity }) =>
    result + product.price * quantity;
  return pairs.reduce(addCost, 0);
}
