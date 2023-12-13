SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary
FROM employee AS e
INNER JOIN department AS d
ON e.departmentId = d.id
WHERE (departmentId, salary) IN (SELECT departmentId, MAX(salary) FROM employee GROUP BY departmentId);
