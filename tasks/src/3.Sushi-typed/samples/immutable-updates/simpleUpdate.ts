function insertItem(array, index, item) {
  return [
    ...array.slice(0, index),
    item,
    ...array.slice(index)
  ];
}

function removeItem(array, index) {
  return array.filter((item, i) => i !== index);
}

function updateItem(array, index, item) {
  return array.map((oldItem, i) => {
    if (i !== index) {
      return oldItem;
    }
    return {
      ...oldItem,
      ...item
    };
  });
}

function updateItemByIndex(array, index, updateCallback) {
  return array.map((oldItem, i) => {
    if (i !== index) {
      return oldItem;
    }
    return updateCallback(oldItem);
  });
}

function updateItemById(array, itemId, updateCallback) {
  return array.map(oldItem => {
    if (oldItem.id !== itemId) {
      return oldItem;
    }
    return updateCallback(oldItem);
  });
}

function updateObjectByKey(oldObject, key, updateCallback) {
  return {
    ...oldObject,
    [key]: updateCallback(oldObject[key])
  };
}
