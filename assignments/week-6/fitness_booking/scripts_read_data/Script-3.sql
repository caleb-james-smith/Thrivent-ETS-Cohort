-- Count the number of people

SELECT COUNT(*) AS num_people
FROM people;

SELECT COUNT(*) AS "Number of People"
FROM people;

-- Error: This does not work in PostgreSQL!
SELECT COUNT(*) AS [Number of People]
FROM people;

-- Count the number of members

SELECT COUNT(*) AS num_members
FROM people
JOIN people_roles ON people.id = people_roles.person_id
JOIN roles ON roles.id = people_roles.role_id
WHERE roles.name = 'member';

-- Count the number of trainers

SELECT COUNT(*) AS num_trainers
FROM people
JOIN people_roles ON people.id = people_roles.person_id
JOIN roles ON roles.id = people_roles.role_id
WHERE roles.name = 'trainer';

-- Count the number of classes

SELECT COUNT(*) AS num_classes
FROM classes;

-- Count the number of class sessions

SELECT COUNT(*) AS num_class_sessions
FROM class_sessions;

-- Count the number of bookings

SELECT COUNT(*) AS num_bookings
FROM bookings;

-- Count the number of trainer assignments

SELECT COUNT(*) AS num_trainer_assignments
FROM trainer_assignments;

-- Get info for class sessions
-- Include the number of bookings per session
-- Sort by number of bookings in descending order
-- Include class session with no bookings

SELECT
	COUNT(bookings.id) AS num_bookings,
	classes.name AS class_name,
	class_types.type AS class_type,
	locations.name AS location_name,
	class_sessions.start_at,
	class_sessions.end_at 
FROM class_sessions
JOIN classes ON class_sessions.class_id = classes.id
JOIN locations ON class_sessions.location_id = locations.id
JOIN class_types ON class_types.id = classes.class_type_id
LEFT JOIN bookings ON bookings.class_session_id = class_sessions.id
GROUP BY
	class_name,
	class_type,
	location_name,
	class_sessions.start_at,
	class_sessions.end_at
ORDER BY num_bookings DESC;

-- For each member, count the number of bookings
-- Sort by number of bookings in descending order 

SELECT
	COUNT(b.id) AS num_bookings,
	p.first_name,
	p.last_name
FROM people AS p
JOIN people_roles AS pr
	ON pr.person_id = p.id
JOIN roles AS r
	ON r.id = pr.role_id
JOIN bookings AS b
	ON b.member_id = p.id
WHERE
	r.name = 'member'
GROUP BY
	p.first_name,
	p.last_name
ORDER BY num_bookings DESC;

-- For each trainer, count the number of trainer assignments
-- Sort by number of trainer assignments in descending order

SELECT
	COUNT(ta.id) AS num_trainer_assignments,
	p.first_name,
	p.last_name
FROM people AS p
JOIN people_roles AS pr
	ON pr.person_id = p.id
JOIN roles AS r
	ON r.id = pr.role_id
JOIN trainer_assignments AS ta
	ON ta.trainer_id = p.id
WHERE
	r.name = 'trainer'
GROUP BY
	p.first_name,
	p.last_name
ORDER BY num_trainer_assignments DESC;

-- For each class, count the number of sessions
-- Include the class type
-- Sort by numer of sessions in descending order

SELECT
	COUNT(class_sessions.id) AS num_sessions,
	classes.name AS class_name,
	class_types.type AS class_type
FROM classes
JOIN class_sessions
	ON class_sessions.class_id = classes.id
JOIN class_types
	ON class_types.id = classes.class_type_id
GROUP BY
	class_name,
	class_type
ORDER BY num_sessions DESC;
