SELECT *
FROM `cities`
WHERE `district` LIKE '%Holland';

SELECT *
FROM `cities`
WHERE `name` LIKE '%ville%';

SELECT *
FROM `cities`
WHERE `country_id` IN (56, 199, 172, 98)
ORDER BY `population` DESC
LIMIT 10;