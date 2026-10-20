# PostgreSQL Cheat Sheet Reference

[Original reference](https://www.databaselabs.io/blog/img/Postgres-Cheat-Sheet.pdf)

This Markdown file preserves the extractable text. Consult the original PDF for diagrams, screenshots and precise page layout.

## Page 1

```text
PostgreSQL Cheat Sheet
Q ueries                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              psql
  SELECT name, price FROM Parts                                                                                                                                          psql -h hostname -U username db-name
    WHERE id=123 OR quantity>0                                                                                                                                           \d -- list tables, views, seqs
    ORDER BY name DESC;                                                                                                                                                  \c other-db -- connect to another db

  -- Average price for each vendor:                                                                                                                                      -- Send query results to a file:
  SELECT vendor_id, avg(price) from Parts                                                                                                                                \copy (SELECT 2+2) TO '/tmp/outfile'
    GROUP BY vendor_id;

  -- Average price for certain vendors:                                                                                                                                  -- Read commands from a file:
  SELECT vendor_id, avg(price) from Parts                                                                                                                                \i /path/to/file.sql
    WHERE vendor_id IN (1, 2)                                                                                                                                            \? -- list all commands
    GROUP BY vendor_id;

  SELECT max(price), min(price) FROM Parts;                                                                                                                              Transac  tions
  SELECT COUNT(*) FROM Parts;                                                                                                                                             BEGIN TRANSACTION;
  SELECT * FROM Parts WHERE name LIKE 'Grey%';                                                                                                                            -- do stuff
                                                                                                                                                                          COMMIT;
                                                                                                                                                                          -- or --
                                                                                                                                                                          ROLLBACK;
   Joins                                                                                                                                                               JSON
  SELECT parts.name, parts.price, vendor.name
  as VendorName                                                                                                                                                          SELECT id, name, attributes->'frob'
   FROM parts, vendors                                                                                                                                                     FROM parts
   WHERE parts.vendor_id = vendors.id                                                                                                                                      WHERE attributes @> '{"usefulness" :
   ORDER BY VendorName, parts.name;                                                                                                                                      "high"}';

                   Database Labs                                                    Postgres Database as a Ser vice •  Suggestions: suppor t@databaselabs.ioCopyright © 2016 Database Labs LLC. All rights reserved.
```

## Page 2

```text
PostgreSQL Cheat Sheet
Tables                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Common  Data Types
CREATE TABLE Vendors (                                                                                                                            INTEGER, BIGINT - signed 4/8 byte integers
  id SERIAL PRIMARY KEY,                                                                                                                          SERIAL, BIGSERIAL - auto-incrementing integers
  name TEXT UNIQUE NOT NULL);                                                                                                                     UUID - universally unique identifier

                                                                                                                                                  REAL, DOUBLE - floating point number
CREATE TABLE Parts (                                                                                                                              NUMERIC - fixed point number - for money
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  quantity INTEGER,                                                                                                                               DATE - month, day, year
  price NUMERIC,                                                                                                                                  TIME - time of day
  attributes JSONB,                                                                                                                               INTERVAL - timespan
  vendor_id INTEGER NOT NULL REFERENCES                                                                                                           TIMESTAMP WITH TIME ZONE - time + date
vendors(id),
  createdAt TIMESTAMP WITH TIME ZONE NOT NULL                                                                                                     TEXT - variable length string
DEFAULT now());                                                                                                                                   VARCHAR(x) - variable length up to x
                                                                                                                                                  CHARACTER(x) - fixed x-length string
                                                                                                                                                  JSONB - compressed JSON data
ALTER TABLE Parts ADD COLUMN description TEXT;
ALTER TABLE Parts RENAME COLUMN description TO                                                                                                    Inser  t, Update, Delete
descr;                                                                                                                                              INSERT INTO Vendors (Name) VALUES ('A Vendor');
ALTER TABLE Parts DROP COLUMN descr;                                                                                                                INSERT INTO Vendors (Name) VALUES ('Other
                                                                                                                                                    Vendor');
ALTER TABLE Parts ALTER COLUMN quantity SET NOT
NULL;                                                                                                                                               INSERT INTO Parts (name, quantity, price,
                                                                                                                                                    attributes,vendor_id) VALUES ('Grey Widget', 12,
ALTER TABLE Parts RENAME TO PartsTable;                                                                                                             1.23,'{"frob":12,"usefulness":"high"}',(SELECT ID
                                                                                                                                                    FROM vendors WHERE name='A Vendor'));

DROP TABLE Parts;                                                                                                                                   UPDATE Vendors SET name='A Vendor, Inc.'
                                                                                                                                                       WHERE NAME='A Vendor';

                                                                                                                                                    DELETE FROM Parts WHERE name='Grey Widget';
              Database Labs                                        Postgres Database as a Ser vice •  Suggestions: suppor t@databaselabs.ioCopyright © 2016 Database Labs LLC. All rights reserved.
```
