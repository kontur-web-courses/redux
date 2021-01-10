import products from './products';

export default class Api {
  constructor(config) {
    //NOTE: здесь могла бы быть необходимая конфигурация
    this.baseUrl = config.baseUrl;
  }

  fetchProducts() {
    return delay(1000).then(() => products);
  }

  fetchProductIdsByTags(productTags) {
    const hasProductTags = (product, necessaryTags) =>
      necessaryTags.every(necessaryTag =>
        product.tags.some(productTag => necessaryTag === productTag)
      );

    return delay(500).then(() =>
      products.filter(p => hasProductTags(p, productTags)).map(p => p.id)
    );
  }

  fetchProductIdsByTagsUnstable(productTags) {
    return this.fetchProductIdsByTags(productTags).then(ids => {
      if (Math.random() > 0.5) return ids;
      throw 'error on fetching product ids by tags';
    });
  }

  sendMetric(name, value) {
    return new Promise((resolve, reject) => {
      console.log(
        `%c metric '${name}' with '${value}' has been sent`,
        'color: blue'
      );
      resolve();
    });
  }
}

function delay(timeInMilliseconds) {
  return new Promise((resolve, reject) =>
    setTimeout(resolve, timeInMilliseconds)
  );
}
