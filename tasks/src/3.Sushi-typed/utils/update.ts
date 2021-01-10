import update from 'immutability-helper';

update.extend('$filter', function(predicate, original) {
  return original.filter(predicate);
});

update.extend('$map', function(callback, original) {
  return original.map(callback);
});

update.extend('$pushOrUpdate', function({ condition, updater }, original) {
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

update.extend('$applyUpdate', function(callback, original) {
  return update(original, callback(original));
});

export default update;
