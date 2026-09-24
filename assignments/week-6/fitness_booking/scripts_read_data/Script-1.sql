-- Get all info for people

SELECT * FROM people;

-- Get info for members

SELECT
	first_name,
	last_name,
	email,
	phone_number
FROM people
JOIN people_roles ON people.id = people_roles.person_id
JOIN roles ON roles.id = people_roles.role_id
WHERE roles.name = 'member';

-- Get info for trainers 

SELECT
	first_name,
	last_name,
	email,
	phone_number
FROM people
JOIN people_roles ON people.id = people_roles.person_id
JOIN roles ON roles.id = people_roles.role_id
WHERE roles.name = 'trainer';

-- Get all info for class sessions

SELECT * FROM class_sessions;

-- Get all info for bookings

SELECT * FROM bookings;

-- Get readable info for class sessions
-- Include class info
-- Sort by start time in ascending order

SELECT
	classes.name AS class_name,
	class_types.type AS class_type,
	locations.name AS location_name,
	class_sessions.start_at,
	class_sessions.end_at
FROM class_sessions
JOIN classes ON class_sessions.class_id = classes.id
JOIN locations ON class_sessions.location_id = locations.id
JOIN class_types ON class_types.id = classes.class_type_id
ORDER BY class_sessions.start_at;

-- Get info for cardio class types ordered by start time

SELECT
	classes.name AS class_name,
	class_types.type AS class_type,
	locations.name AS location_name,
	class_sessions.start_at,
	class_sessions.end_at
FROM class_sessions
JOIN classes ON class_sessions.class_id = classes.id
JOIN locations ON class_sessions.location_id = locations.id
JOIN class_types ON class_types.id = classes.class_type_id
WHERE class_types.type = 'Cardio'
ORDER BY start_at ASC;

-- Get info for class sessions at Millennium Park ordered by start time

SELECT
	classes.name AS class_name,
	class_types.type AS class_type,
	locations.name AS location_name,
	class_sessions.start_at,
	class_sessions.end_at
FROM class_sessions
JOIN classes ON class_sessions.class_id = classes.id
JOIN locations ON class_sessions.location_id = locations.id
JOIN class_types ON class_types.id = classes.class_type_id
WHERE locations.name = 'Millennium Park'
ORDER BY start_at ASC;

-- Get info for the next class session

SELECT
	classes.name AS class_name,
	class_types.type AS class_type,
	locations.name AS location_name,
	class_sessions.start_at,
	class_sessions.end_at
FROM class_sessions
JOIN classes ON class_sessions.class_id = classes.id
JOIN locations ON class_sessions.location_id = locations.id
JOIN class_types ON class_types.id = classes.class_type_id
WHERE start_at > now()
ORDER BY start_at ASC
LIMIT 1;
