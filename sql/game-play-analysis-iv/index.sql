# Write your MySQL query statement below
SELECT  ROUND(COUNT(a1.player_id) / (SELECT Count(DISTINCT player_id) FROM Activity), 2) AS fraction FROM Activity AS a1
INNER JOIN (SELECT player_id, MIN(event_date) AS event_date From Activity GROUP BY player_id) AS a2
ON a1.player_id = a2.player_id AND a1.event_date = DATE_ADD(a2.event_date, INTERVAL 1 DAY);