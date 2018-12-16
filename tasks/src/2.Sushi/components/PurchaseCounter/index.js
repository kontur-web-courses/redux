import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@skbkontur/react-icons/Add';
import RemoveIcon from '@skbkontur/react-icons/Remove';
import Button from '@skbkontur/react-ui/Button';
import Input from '@skbkontur/react-ui/Input';
import Group from '@skbkontur/react-ui/Group';
import Gapped from '@skbkontur/react-ui/Gapped';
import './styles.css';

export default function PurchaseCounter({ value, onDecrease, onIncrease }) {
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
}

PurchaseCounter.propTypes = {
  value: PropTypes.number.isRequired,
  onDecrease: PropTypes.func,
  onIncrease: PropTypes.func
};
