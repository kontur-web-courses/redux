import {Opaque} from './Opaque';


export type ProductId = Opaque<'ProductId', string>;

function isProductId(id: unknown) {
  return typeof id === 'number';
}

export function tryParseProductId(id: unknown): ProductId {
  if (isProductId(id)) {
    throw new Error(`${id} in not a real product id`);
  }

  return id as ProductId;
}
