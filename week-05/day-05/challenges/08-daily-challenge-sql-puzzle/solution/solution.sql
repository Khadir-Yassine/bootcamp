BEGIN;
CREATE TEMP TABLE FirstTab(id INTEGER,name VARCHAR(10));
INSERT INTO FirstTab VALUES (5,'Pawan'),(6,'Sharlee'),(7,'Krish'),(NULL,'Avtaar');
CREATE TEMP TABLE SecondTab(id INTEGER);INSERT INTO SecondTab VALUES (5),(NULL);
SELECT COUNT(*) AS q1_expected_0 FROM FirstTab ft WHERE ft.id NOT IN(SELECT id FROM SecondTab WHERE id IS NULL);
SELECT COUNT(*) AS q2_expected_2 FROM FirstTab ft WHERE ft.id NOT IN(SELECT id FROM SecondTab WHERE id=5);
SELECT COUNT(*) AS q3_expected_0 FROM FirstTab ft WHERE ft.id NOT IN(SELECT id FROM SecondTab);
SELECT COUNT(*) AS q4_expected_2 FROM FirstTab ft WHERE ft.id NOT IN(SELECT id FROM SecondTab WHERE id IS NOT NULL);
DO $$ BEGIN
 IF (SELECT COUNT(*) FROM FirstTab ft WHERE ft.id NOT IN(SELECT id FROM SecondTab WHERE id IS NULL))<>0 THEN RAISE EXCEPTION 'Q1 failed';END IF;
 IF (SELECT COUNT(*) FROM FirstTab ft WHERE ft.id NOT IN(SELECT id FROM SecondTab WHERE id=5))<>2 THEN RAISE EXCEPTION 'Q2 failed';END IF;
 IF (SELECT COUNT(*) FROM FirstTab ft WHERE ft.id NOT IN(SELECT id FROM SecondTab))<>0 THEN RAISE EXCEPTION 'Q3 failed';END IF;
 IF (SELECT COUNT(*) FROM FirstTab ft WHERE ft.id NOT IN(SELECT id FROM SecondTab WHERE id IS NOT NULL))<>2 THEN RAISE EXCEPTION 'Q4 failed';END IF;
END $$;
ROLLBACK; -- Repeatable practice: undo all example changes.
