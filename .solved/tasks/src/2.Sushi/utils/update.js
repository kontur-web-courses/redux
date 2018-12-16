import update from 'immutability-helper';

update.extend('$filter', function(predicate, original) {
  return original.filter(predicate);
});

update.extend('$map', function(callback, original) {
  return original.map(callback);
});

update.extend('$applyCommand', function(callback, original) {
  return update(original, callback(original));
});

export default update;
