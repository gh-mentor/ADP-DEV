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

    private id: number;
    private name: string;
    private price: number;


    private constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }


    public static createProduct(id: number, name: string, price: number): Product {
        return new Product(id, name, price);
    }


    public getId(): number {
        return this.id;
    }


    public getName(): string {
        return this.name;
    }


    public getPrice(): number {
        return this.price;
    }


/**
 * Sets the price of the product.
 * @param price - The price to set for the product.
 * @throws {Error} If the price is not within the valid range.
 * @example
 * // Setting the price of a product
 * let product = new Product();
 * product.setPrice(100);
 */
    public setPrice(price: number): void {

        if (price < MIN_PRICE || price > MAX_PRICE) {
            throw new Error(`The price must be between ${MIN_PRICE} and ${MAX_PRICE}`);
        }

        this.price = price;
    }


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