# Write your MySQL query statement below
SELECT 
    s.user_id, 
    ROUND(((SELECT COUNT(*) FROM Confirmations WHERE Confirmations.user_id = s.user_id AND action = 'confirmed') / COUNT(s.user_id)), 2) AS confirmation_rate
FROM Signups AS s 
LEFT JOIN Confirmations AS c
ON s.user_id = c.user_id
GROUP BY s.user_id;