SELECT ROUND(COUNT(d1.customer_id) / (SELECT COUNT(DISTINCT customer_id) FROM Delivery) * 100, 2) AS immediate_percentage FROM Delivery AS d1
INNER JOIN (SELECT d2.customer_id, MIN(d2.order_date) AS min_date FROM Delivery AS d2 GROUP BY d2.customer_id) AS d3
ON d1.customer_id = d3.customer_id AND d1.order_date = d3.min_date AND d1.order_date = d1.customer_pref_delivery_date;




