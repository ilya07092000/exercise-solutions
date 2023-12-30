SELECT TomorrowWeather.id
FROM Weather AS TodayWeather 
INNER JOIN Weather AS TomorrowWeather
ON TodayWeather.temperature < TomorrowWeather.temperature 
WHERE DATE_ADD(TodayWeather.recordDate, INTERVAL 1 DAY) = TomorrowWeather.recordDate
GROUP BY id;