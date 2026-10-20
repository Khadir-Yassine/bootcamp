-- Synthetic DVD rental fixture for PostgreSQL syntax/relationship checks.
-- This is NOT the official DVD rental dataset and cannot reproduce its result counts.
CREATE TABLE language(language_id SERIAL PRIMARY KEY,name TEXT NOT NULL);
CREATE TABLE country(country_id SERIAL PRIMARY KEY,country TEXT NOT NULL);
CREATE TABLE city(city_id SERIAL PRIMARY KEY,city TEXT NOT NULL,country_id INT REFERENCES country);
CREATE TABLE address(address_id SERIAL PRIMARY KEY,address TEXT NOT NULL,district TEXT,city_id INT REFERENCES city,phone TEXT);
CREATE TABLE store(store_id SERIAL PRIMARY KEY,address_id INT REFERENCES address);
CREATE TABLE customer(customer_id SERIAL PRIMARY KEY,store_id INT REFERENCES store,first_name TEXT,last_name TEXT,address_id INT REFERENCES address,create_date DATE DEFAULT CURRENT_DATE);
CREATE TABLE film(film_id SERIAL PRIMARY KEY,title TEXT NOT NULL,description TEXT,release_year INT,rental_rate NUMERIC(4,2),replacement_cost NUMERIC(5,2),length INT,rating TEXT,language_id INT REFERENCES language);
CREATE TABLE actor(actor_id SERIAL PRIMARY KEY,first_name TEXT,last_name TEXT);
CREATE TABLE film_actor(actor_id INT REFERENCES actor,film_id INT REFERENCES film,PRIMARY KEY(actor_id,film_id));
CREATE TABLE category(category_id SERIAL PRIMARY KEY,name TEXT);
CREATE TABLE film_category(film_id INT REFERENCES film,category_id INT REFERENCES category,PRIMARY KEY(film_id,category_id));
CREATE TABLE inventory(inventory_id SERIAL PRIMARY KEY,film_id INT REFERENCES film,store_id INT REFERENCES store);
CREATE TABLE rental(rental_id SERIAL PRIMARY KEY,inventory_id INT REFERENCES inventory,customer_id INT REFERENCES customer,rental_date TIMESTAMP,return_date TIMESTAMP);
CREATE TABLE payment(payment_id SERIAL PRIMARY KEY,customer_id INT REFERENCES customer,rental_id INT REFERENCES rental,amount NUMERIC(6,2),payment_date TIMESTAMP,staff_id INT);
CREATE VIEW actor_info AS SELECT actor_id,first_name,last_name FROM actor;
INSERT INTO language(name) VALUES('English'),('French'),('Japanese');
INSERT INTO country(country) VALUES('Morocco'),('France');
INSERT INTO city(city,country_id) VALUES('Casablanca',1),('Paris',2),('Rabat',1);
INSERT INTO address(address,district,city_id,phone) VALUES('1 Example St','Texas',1,'000-0000'),('2 Example St','Paris',2,'000-0001'),('3 Example St','Rabat',3,'000-0002');
INSERT INTO store(address_id) VALUES(1),(2);
INSERT INTO customer(store_id,first_name,last_name,address_id) VALUES(1,'Matthew','Mahan',1),(1,'Lina','Example',3),(2,'Adam','Example',2);
INSERT INTO film(title,description,release_year,rental_rate,replacement_cost,length,rating,language_id) VALUES
('Academy Dinosaur','A family adventure',2006,0.99,20,90,'G',1),
('Sumo Story','A sumo wrestler finds a boat',2006,2.99,28,100,'PG',1),
('Short Documentary','A true story',2006,4.99,15,55,'R',1),
('Ghost Boat','A dead monster on a boat',2006,4.99,30,110,'PG-13',2),
('Quiet Boat','A voyage on the sea',2006,0.99,29,95,'PG',1),
('No Inventory','A catalog-only title',2006,1.99,10,60,'G',1);
INSERT INTO actor(first_name,last_name) VALUES('Penelope','Monroe'),('Joe','Swank');
INSERT INTO film_actor VALUES(1,2),(2,5);
INSERT INTO category(name) VALUES('Action'),('Documentary'),('Horror'),('Family');
INSERT INTO film_category VALUES(1,4),(2,1),(3,2),(4,3),(5,1),(6,4);
INSERT INTO inventory(film_id,store_id) VALUES(1,1),(2,1),(3,2),(4,2),(5,1),(5,2);
INSERT INTO rental(inventory_id,customer_id,rental_date,return_date) VALUES
(1,1,'2005-07-20','2005-07-29'),(2,2,'2005-07-20',NULL),(3,1,'2005-07-20','2005-08-01'),(4,3,'2005-07-20',NULL),(5,1,'2005-07-20','2005-07-30');
INSERT INTO payment(customer_id,rental_id,amount,payment_date,staff_id) VALUES(1,1,5.99,'2005-07-20',1),(2,2,2.99,'2005-07-20',1),(1,3,5.99,'2005-07-20',2),(3,4,4.99,'2005-07-20',2),(1,5,6.99,'2005-07-20',1);
