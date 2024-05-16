import { Product } from '../src/Product';

describe('Product', () => {
  let product: Product;

  beforeEach(() => {


  });

  it('should check the creation of a product using the createProduct static method', () => {
    product = Product.createProduct(1, 'Product 1', 100);
    expect(product.getId()).toBe(1);
    expect(product.getName()).toBe('Product 1');
    expect(product.getPrice()).toBe(100);

  });

  // Add more test cases for other methods of Product class


});