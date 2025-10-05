# Write your MySQL query statement below
SELECT 
    s1.score AS score, 
    (SELECT COUNT(DISTINCT(s2.score)) FROM Scores AS s2 WHERE s2.score >= s1.score) AS `rank`
FROM Scores AS s1
ORDER BY score DESC;