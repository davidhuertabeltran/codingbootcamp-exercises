UPDATE `cities`
SET `name` = 'Prague'
WHERE `id` = 3339


UPDATE `cities`
SET `population` = 1294513
WHERE `id` = 3339

UPDATE `countries`
SET `head_of_state` = 'Xavier Espot Zamora'
WHERE `name` = 'Andorra'


UPDATE `countries`
SET `head_of_state` = 'Joseph Robinette Biden Jr.'
WHERE `head_of_state` = 'George W. Bush'

UPDATE `countries`
SET `population` = 300, `gnp` = 13.91
WHERE `name` = 'United States Minor Outlying Islands'
LIMIT 1