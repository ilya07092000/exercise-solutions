DELETE FROM person 
WHERE id IN (
    SELECT personTable1.id FROM (SELECT * FROM person) AS personTable1, (SELECT * FROM person) AS personTable2
    WHERE personTable1.email = personTable2.email AND personTable1.id > personTable2.id
);