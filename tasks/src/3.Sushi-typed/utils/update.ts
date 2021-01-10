import update, { extend } from 'immutability-helper';

extend<Array<unknown>>('$filter', function(predicate, original) {
  return original.filter(predicate);
});

extend<Array<unknown>>('$map', function(callback, original) {
  return original.map(callback);
});

extend<Array<unknown>>('$pushOrUpdate', function({ condition, updater }, original) {
  const result = [];
  let found = false;
  for(const item of original) {
    if (condition(item)) {
      result.push(updater(item));
      found = true;
    } else {
      result.push(item);
    }
  }
  if (!found) {
    result.push(updater(undefined));
  }
  return result;
});

extend('$applyUpdate', function(callback, original) {
  return update(original, callback(original));
});

export default update;
