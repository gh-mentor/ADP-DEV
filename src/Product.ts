/*
This file models a Product entity.
Th class can be instantiated by calling a static method createProduct().
The class has the following properties:
- id: number;
- name: string;
- price: number;
*/

/*
Add a constant 'MIN_PRICE' with a value of 0.01
*/
export const MIN_PRICE = 0.01;

/*
Add a constant 'MAX_PRICE' with a value of 1000
*/
export const MAX_PRICE = 1000;


export class Product {
  // Create the private fields for the product
    private id: number;
    private name: string;
    private price: number;

    // create the constructor for the product
    private constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // create a public static method to create a product
    public static createProduct(id: number, name: string, price: number): Product {
        return new Product(id, name, price);
    }

    // add a method to get the product id
    public getId(): number {
        return this.id;
    }

    // add a method to get the product name
    public getName(): string {
        return this.name;
    }

    // add a method to get the product price
    public getPrice(): number {
        return this.price;
    }

    // add a method to set the product price
    public setPrice(price: number): void {
        /*
        Add a check to ensure that the price is greater than or equal to MIN_PRICE and less than or equal to MAX_PRICE.
        */
        if (price < MIN_PRICE || price > MAX_PRICE) {
            throw new Error(`The price must be between ${MIN_PRICE} and ${MAX_PRICE}`);
        }

        this.price = price;
    }

    /*
    Add a method 'toString()' that returns a string representation of the product.
    The string should be in the following format:
    'Product: {name}, Price: {price}'
    */
    public toString(): string {
        return `Product: ${this.name}, Price: ${this.price}`;
    }

    /*
    Add a method to persist the product to a database.
    */
    public save(): void {
        console.log(`Saving product: ${this.toString()}`);
    }
}