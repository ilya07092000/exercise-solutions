-- # Write your MySQL query statement below
SELECT 
    DATE_FORMAT(t1.trans_date, '%Y-%m') AS month, 
    t1.country,
    t3.trans_count,
    IFNULL(t4.approved_count, 0) AS approved_count,
    t3.trans_total_amount AS trans_total_amount,
    IFNULL(t4.approved_total_amount, 0) AS approved_total_amount
FROM Transactions AS t1
LEFT JOIN (SELECT COUNT(*) AS trans_count, SUM(t2.amount) AS trans_total_amount, country, DATE_FORMAT(t2.trans_date, '%Y-%m') AS trans_month FROM Transactions as t2 GROUP BY t2.country, trans_month) AS t3 ON case when t1.country IS NOT NULL then t3.country = t1.country else true end AND t3.trans_month = DATE_FORMAT(t1.trans_date, '%Y-%m')
LEFT JOIN (SELECT COUNT(*) AS approved_count, SUM(t2.amount) AS approved_total_amount, country, DATE_FORMAT(t2.trans_date, '%Y-%m') AS trans_month FROM Transactions as t2 WHERE t2.state = 'approved' GROUP BY t2.country, trans_month) AS t4 ON case when t1.country IS NOT NULL then t4.country = t1.country else true end AND t4.trans_month = DATE_FORMAT(t1.trans_date, '%Y-%m') 
GROUP BY t3.trans_month, country;

