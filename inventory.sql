/*
This PL/SQL script creates tables in the existing 'inventory' database for training demonstrations, then creates stored procedures to insert, update, and delete records in the tables. The script also creates a trigger to update the 'updated_at' column in the 'products' table whenever a record is updated.  The script is divided into the following sections:
1. Create Tables: This section creates the 'categories' and 'products' tables with the necessary columns and constraints.
2. Insert Data: This section inserts sample data into the 'categories' and 'products' tables.
3. Create Stored Procedures: This section creates stored procedures to insert, update, and delete records in the 'products' table.
4. Create Trigger: This section creates a trigger to update the 'updated_at' column in the 'products' table whenever a record is updated.
*/
Details of the tables are as follows:
- 'categores': This table stores the categories of the products.
- 'products': This table stores the products.
- There is a one-to-many relationship between the 'categories' and 'products' tables.
- The tables are linked by a foreign key constraint in the 'products' table.
*/

-- set the default database to 'inventory'
USE inventory;

-- create the 'categories' table only if it does not exist
CREATE TABLE IF NOT EXISTS categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(50) NOT NULL
);

-- create the 'products' table only if it does not exist
CREATE TABLE IF NOT EXISTS products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category_id INT,
    -- add a timestamp column to track the date and time of product creation and update
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- First remove all rows from the 'categories' and 'products' tables.
TRUNCATE TABLE products;
TRUNCATE TABLE categories;

-- Insert 5 rows of sample data into the 'categories' table
INSERT INTO categories (category_name) VALUES ('Electronics');
INSERT INTO categories (category_name) VALUES ('Clothing');
INSERT INTO categories (category_name) VALUES ('Books');
INSERT INTO categories (category_name) VALUES ('Home & Kitchen');
INSERT INTO categories (category_name) VALUES ('Sports & Outdoors');

-- Insert 10 rows of sample data into the 'products' table
INSERT INTO products (product_name, price, category_id) VALUES ('Laptop', 1000.00, 1);
INSERT INTO products (product_name, price, category_id) VALUES ('Smartphone', 500.00, 1);
INSERT INTO products (product_name, price, category_id) VALUES ('T-shirt', 20.00, 2);
INSERT INTO products (product_name, price, category_id) VALUES ('Jeans', 50.00, 2);
INSERT INTO products (product_name, price, category_id) VALUES ('Harry Potter', 15.00, 3);
INSERT INTO products (product_name, price, category_id) VALUES ('Lord of the Rings', 20.00, 3);
INSERT INTO products (product_name, price, category_id) VALUES ('Coffee Maker', 50.00, 4);
INSERT INTO products (product_name, price, category_id) VALUES ('Toaster', 30.00, 4);
INSERT INTO products (product_name, price, category_id) VALUES ('Tennis Racket', 80.00, 5);
INSERT INTO products (product_name, price, category_id) VALUES ('Soccer Ball', 20.00, 5);

-- Create a stored procedure to insert a new product into the 'products' table
DELIMITER //
CREATE PROCEDURE insert_product (
    IN product_name VARCHAR(50),
    IN price DECIMAL(10, 2),
    IN category_id INT
)
BEGIN
    INSERT INTO products (product_name, price, category_id) VALUES (product_name, price, category_id);
END //
DELIMITER ;

-- Create a stored procedure to update an existing product in the 'products' table
DELIMITER //
CREATE PROCEDURE update_product (
    IN product_id INT,
    IN product_name VARCHAR(50),
    IN price DECIMAL(10, 2),
    IN category_id INT
)
BEGIN
    UPDATE products SET product_name = product_name, price = price, category_id = category_id WHERE product_id = product_id;
END //
DELIMITER ;


-- Create a Trigger to update the 'updated_at' column in the 'products' table whenever a record is updated
DELIMITER //
CREATE TRIGGER update_product_timestamp
BEFORE UPDATE ON products
FOR EACH ROW
BEGIN
    SET NEW.updated_at = CURRENT_TIMESTAMP;
END //
DELIMITER ;






