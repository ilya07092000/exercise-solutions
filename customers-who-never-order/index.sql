SELECT c.name as Customers FROM customers as c
LEFT JOIN orders as o
ON c.id = o.customerId
WHERE o.customerId IS NULL;