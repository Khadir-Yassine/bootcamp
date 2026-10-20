CREATE TABLE IF NOT EXISTS menu_items(item_id SERIAL PRIMARY KEY,item_name VARCHAR(30) NOT NULL UNIQUE,item_price SMALLINT DEFAULT 0 CHECK(item_price>=0));
INSERT INTO menu_items(item_name,item_price) VALUES ('Burger',35),('Salad',25) ON CONFLICT(item_name) DO NOTHING;
