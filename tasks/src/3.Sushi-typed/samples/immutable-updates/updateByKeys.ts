export function getIn(state = {}, keys, defaultValue) {
  let value = state;

  for (const key of keys) {
    if (value[key] === null) {
      return null;
    }

    if (value[key] === undefined) {
      return defaultValue;
    }

    value = value[key];
  }

  return value;
}

export function setIn(state, keys, value) {
  const obj = { ...state };
  const last = keys
    .slice(0, -1)
    .reduce(
      (part, key) => (part[key] = part[key] ? { ...part[key] } : {}),
      obj
    );

  last[keys.slice(-1)[0]] = value;

  return obj;
}

export function updateIn(state, keys, fn, defaultValue) {
  const obj = { ...state };
  const last = keys
    .slice(0, -1)
    .reduce(
      (part, key) => (part[key] = part[key] ? { ...part[key] } : {}),
      obj
    );
  const value = last[keys.slice(-1)[0]];
  const oldValue = value === undefined ? defaultValue : value;

  last[keys.slice(-1)[0]] = fn(oldValue);

  return obj;
}

export function deleteIn(state, keys, key) {
  const newSubstate = omit(getIn(state, keys, {}), key);

  return setIn(state, keys, newSubstate);
}

function omit(obj, key) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}
