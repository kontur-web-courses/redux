import React from "react";
import PropTypes from "prop-types";
import AddIcon from "@skbkontur/react-icons/Add";
import RemoveIcon from "@skbkontur/react-icons/Remove";
import {Button, Input, Group} from "@skbkontur/react-ui";
import "./PurchaseCounter.css";

export const PurchaseCounter = ({ value, onDecrease, onIncrease }) => {
  return (
    <Group>
      <Button onClick={onDecrease}>
        <RemoveIcon />
      </Button>
      <Input readOnly={true} width={50} align="center" value={value} />
      <Button onClick={onIncrease}>
        <AddIcon />
      </Button>
    </Group>
  );
};

PurchaseCounter.propTypes = {
  value: PropTypes.number.isRequired,
  onDecrease: PropTypes.func,
  onIncrease: PropTypes.func
};
