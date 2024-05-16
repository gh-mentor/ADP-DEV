import { Product, MIN_PRICE, MAX_PRICE } from '../src/Product';

describe('setPrice', () => {
  let product: Product;

  beforeEach(() => {
    product = Product.createProduct(1, 'Product 1', 100);
  });

  it('should set the price correctly when a valid price is provided', () => {
    product.setPrice(50);
    expect(product.getPrice()).toBe(50);
  });

  it('should throw an exception when the price is less than the MIN_PRICE', () => {
    expect(() => product.setPrice(MIN_PRICE - 0.01)).toThrow(`The price must be between ${MIN_PRICE} and ${MAX_PRICE}`);
  });

  it('should throw an exception when the price is more than the MAX_PRICE', () => {
    expect(() => product.setPrice(MAX_PRICE + 0.01)).toThrow(`The price must be between ${MIN_PRICE} and ${MAX_PRICE}`);
  });
});
