# PostgreSQL Cheat Sheet

[Original reference](https://www.postgresqltutorial.com/wp-content/uploads/2018/03/PostgreSQL-Cheat-Sheet.pdf)

This Markdown file preserves the extractable text. Consult the original PDF for diagrams, screenshots and precise page layout.

## Page 1

```text
PostgreSQL CHEAT SHEET http://www.postgresqltutorial.com


  QUERYING DATA FROM A TABLE                                           QUERYING FROM MULTIPLE TABLES                                        USING SQL OPERATORS

   SELECT c1, c2 FROM t;                                                SELECT c1, c2                                                       SELECT c1, c2 FROM t1
   Query data in columns c1, c2 from a table                            FROM t1                                                             UNION [ALL]
                                                                        INNER JOIN t2 ON condition;                                         SELECT c1, c2 FROM t2;
   SELECT * FROM t;                                                     Inner join t1 and t2                                                Combine rows from two queries
   Query all rows and columns from a table
                                                                        SELECT c1, c2                                                       SELECT c1, c2 FROM t1
   SELECT c1, c2 FROM t                                                 FROM t1                                                             INTERSECT
   WHERE condition;                                                     LEFT JOIN t2 ON condition;                                          SELECT c1, c2 FROM t2;
   Query data and filter rows with a condition                          Left join t1 and t1                                                 Return the intersection of two queries

   SELECT DISTINCT c1 FROM t                                            SELECT c1, c2                                                       SELECT c1, c2 FROM t1
   WHERE condition;                                                     FROM t1                                                             EXCEPT
   Query distinct rows from a table                                     RIGHT JOIN t2 ON condition;                                         SELECTc1, c2 FROM t2;
                                                                        Right join t1 and t2                                                Subtract a result set from another result set
   SELECT c1, c2 FROM t
   ORDER BY c1    ASC [DESC];                                           SELECT c1, c2
   Sort the result setin ascending or descending                        FROM t1                                                             SELECT c1, c2 FROM t1
   order                                                                FULL OUTER JOIN t2 ON condition;                                    WHERE c1    [NOT] LIKE pattern;
                                                                        Perform full outer join                                             Query rows using pattern matching %, _
   SELECT c1, c2 FROM t
   ORDER BY c1                                                          SELECT c1, c2                                                       SELECT c1, c2 FROM t
   LIMIT n  OFFSET offset;                                              FROM t1                                                             WHERE c1 [NOT] IN value_list;
   Skip offset of rows and return the next n rows                       CROSS JOIN t2;                                                      Query rows in a list
                                                                        Produce a Cartesian product of rows in tables
   SELECT c1, aggregate(c2)                                                                                                                 SELECT c1, c2 FROM t
   FROM t                                                               SELECT c1, c2                                                       WHERE     c1 BETWEEN low AND high;
   GROUP BY c1;                                                         FROM t1, t2;                                                        Query rows between two values
   Group rows using an aggregate function                               Another way to perform cross join

   SELECT c1, aggregate(c2)                                             SELECT c1, c2                                                       SELECT c1, c2 FROM t
   FROM t                                                               FROM t1 A                                                           WHERE     c1 IS [NOT] NULL;
   GROUP BY c1                                                          INNER JOIN t2 B    ON condition;                                    Check if values in a table is NULL or not
   HAVING condition;                                                    Join t1 to itself using INNER JOIN clause
   Filter groups using HAVING clause
```

## Page 2

```text
PostgreSQL CHEAT SHEET http://www.postgresqltutorial.com


   MANAGING TABLES                                                      USING SQL CONSTRAINTS                                               MODIFYING DATA

    CREATE TABLE t (                                                    CREATE TABLE t(                                                    INSERT INTO t(column_list)
        idSERIAL PRIMARY KEY,                                              c1 INT, c2 INT, c3  VARCHAR,                                    VALUES(value_list);
        name   VARCHAR NOT NULL,                                           PRIMARY KEY (c1,c2)                                             Insert one row into atable
        price NUMERIC(10,2) DEFAULT 0                                   );
    );                                                                  Set c1 and c2 as a primary key                                     INSERT INTO t(column_list)
    Create  a new table with three columns                                                                                                 VALUES (value_list),
                                                                        CREATE TABLE t1(                                                               (value_list), ….;
    DROP TABLE t     CASCADE;                                              c1 SERIAL PRIMARY KEY,                                          Insert multiple rows into a table
    Delete the table from the database                                     c2 INT,
                                                                           FOREIGN KEY (c2)     REFERENCES t2(c2)                          INSERT INTO t1(column_list)
    ALTER TABLE t ADD      column;                                      );                                                                 SELECT column_list
    Add a new column to the table                                       Set c2 column as a foreign key                                     FROM   t2;
                                                                                                                                           Insert rows from t2 into t1
    ALTER TABLE t DROP COLUMN c ;                                       CREATE TABLE t(
    Drop column c from the table                                           c1 INT, c1 INT,                                                 UPDATE t
                                                                           UNIQUE(c2,c3)                                                   SET c1 = new_value;
                                                                        );                                                                 Update new value in the column c1 for all rows
    ALTER TABLE t ADD constraint;                                       Make the values    in c1 and c2 unique
    Add a constraint                                                                                                                       UPDATE t
                                                                        CREATE TABLE t(                                                    SET c1 = new_value,
    ALTER TABLE t DROP constraint;                                       c1 INT, c2  INT,                                                        c2 = new_value
    Drop a constraint                                                    CHECK(c1> 0 AND c1 >= c2)                                         WHERE    condition;
                                                                        );                                                                 Update values in the column c1, c2     that match the
                                                                        Ensure c1 > 0 and values in c1 >= c2                               condition
    ALTER TABLE t1 RENAME TO t2;
    Rename a table from t1 to t2                                                                                                           DELETE FROM t;
                                                                        CREATE TABLE t(                                                    Delete all data in a table
                                                                            c1SERIAL PRIMARY KEY,
    ALTER TABLE t1 RENAME c1       TO c2   ;                                c2 VARCHAR NOT NULL
    Rename column c1 to c2                                              );                                                                 DELETE FROM t
                                                                        Set values in c2 column not NULL                                   WHERE condition;
    TRUNCATE TABLE t CASCADE;                                                                                                              Delete  subset of rows in a table

    Remove all data in a table
```

## Page 3

```text
PostgreSQL CHEAT SHEET http://www.postgresqltutorial.com



   MANAGING VIEWS                                                     MANAGING INDEXES                                                  MANAGING TRIGGERS

   CREATE VIEW v(c1,c2)                                               CREATE INDEX     idx_name                                          CREATE OR MODIFY TRIGGER trigger_name
   AS                                                                 ON  t(c1,c2);                                                      WHEN EVENT
   SELECT c1, c2                                                      Create an index on c1 and c2 of the table t                        ON table_name     TRIGGER_TYPE
   FROM t;                                                                                                                               EXECUTE stored_procedure;
   Create  a new view that consists  of c1 and c2                                                                                        Create or  modify  a trigger
                                                                      CREATE UNIQUE INDEX        idx_name
                                                                      ON  t(c3,c4);
   CREATE VIEW v(c1,c2)                                               Create a unique index on c3, c4 of the table t                     WHEN
   AS                                                                                                                                    •  BEFORE –   invoke  before the event occurs
   SELECT c1, c2                                                      DROP INDEX idx_name;                                               •  AFTER –   invoke after the event occurs
   FROM t;                                                            Drop an index
   WITH [CASCADED | LOCAL] CHECK OPTION;
   Create a new view with check option                                                                                                   EVENT
                                                                      SQL AGGREGATE FUNCTIONS                                            •  INSERT –   invoke for INSERT
   CREATE RECURSIVE      VIEW v                                                                                                          •  UPDATE –    invoke  for UPDATE
   AS                                                                 AVG   returns the average of a list                                •  DELETE –   invoke  for DELETE

   select-statement   --anchor part                                   COUNTreturns the number of elements of a list
   UNION [ALL]                                                                                                                           TRIGGER_TYPE
   select-statement;  -- recursive part                               SUM  returns the total of a list                                   •  FOR EACH ROW
   Create a recursive view                                                                                                               •  FOR EACH STATEMENT
                                                                      MAX  returns the maximum value in a list

   CREATE TEMPORARYVIEW v                                             MIN  returns the minimum value in a list                          CREATE TRIGGER before_insert_person
   AS                                                                                                                                   BEFORE INSERT
   SELECT c1, c2                                                                                                                        ON person FOR EACH ROW
   FROM t;                                                                                                                              EXECUTE stored_procedure;
   Create a temporary view                                                                                                              Create a trigger invoked before a new row is
                                                                                                                                        inserted into the person table

   DROP VIEW view_name;
   Delete a view                                                                                                                        DROP TRIGGER trigger_name;
                                                                                                                                        Delete a specific trigger
```
