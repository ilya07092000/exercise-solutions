# Write your MySQL query statement below
SELECT euid.unique_id, e.name
FROM Employees AS e
LEFT JOIN EmployeeUNI AS euid
ON e.id = euid.id;