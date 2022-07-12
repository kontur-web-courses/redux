import React from "react";
import PropTypes from "prop-types";
import { Gapped } from "@skbkontur/react-ui";
import "./PurchasesTotalCost.css";

export const PurchasesTotalCost = ({ totalCost }) => {
  return (
    <div className="purchasesTotalCost">
      <Gapped>
        <div className="title">Всего</div>
        <div className="sign">=</div>
        <div className="cost">{totalCost} ₽</div>
      </Gapped>
    </div>
  );
};

PurchasesTotalCost.propTypes = {
  totalCost: PropTypes.number
};
