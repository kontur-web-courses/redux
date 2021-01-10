const ProductTag = {
  new: 0,
  hot: 1,
  veg: 2
};

for (const key of Object.keys(ProductTag)) {
  ProductTag[ProductTag[key]] = key;
}

export default ProductTag;
