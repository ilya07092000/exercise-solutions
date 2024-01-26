# Write your MySQL query statement below
SELECT p.project_id, ROUND(SUM(e.experience_years) / COUNT(e.experience_years), 2) AS average_years 
FROM project AS p
INNER JOIN employee AS e
ON p.employee_id = e.employee_id
GROUP BY p.project_id;