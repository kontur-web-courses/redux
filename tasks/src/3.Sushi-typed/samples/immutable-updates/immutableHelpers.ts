import update from '../utils/update';

function changeQuantity(state, { id, delta }) {
  const values = state.values;
  const newValues = values.some(v => v.id === id)
    ? values.map(v =>
        v.id === id ? { id, quantity: v.quantity + delta } : v
      )
    : [...values, { id, quantity: delta }];

  return {
    ...state,
    values: newValues
  };
}

function changeQuantity1(state, { id, delta }) {
  return update(state, {
    values: vs =>
      vs.some(v => v.id === id)
        ? vs.map(v => (v.id === id ? { id, quantity: v.quantity + delta } : v))
        : [...vs, { id, quantity: delta }]
  });
}

function changeQuantity2(state, { id, delta }) {
  return update(state, {
    values: vs =>
      vs.some(v => v.id === id)
        ? update(vs, {
            $map: v => (v.id === id ? { id, quantity: v.quantity + delta } : v)
          })
        : update(vs, { $push: [{ id, quantity: delta }] })
  });
}

function changeQuantity3(state, { id, delta }) {
  return update(state, {
    values: vs =>
      update(
        vs,
        vs.some(v => v.id === id)
          ? {
              $map: v =>
                v.id === id ? { id, quantity: v.quantity + delta } : v
            }
          : { $push: [{ id, quantity: delta }] }
      )
  });
}

function changeQuantity4(state, { id, delta }) {
  return update(state, {
    values: {
      $applyCommand: vs =>
        vs.some(v => v.id === id)
          ? { 
              $map: v =>
                v.id === id ? { id, quantity: v.quantity + delta } : v
            }
          : { $push: [{ id, quantity: delta }] }
    }
  });
}
