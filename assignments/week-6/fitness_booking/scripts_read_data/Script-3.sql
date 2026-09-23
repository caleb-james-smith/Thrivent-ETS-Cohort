-- Count the number of people

SELECT COUNT(*) AS num_people
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

-- Count the number of class sessions

SELECT COUNT(*) AS num_class_sessions
FROM class_sessions;

-- Count the number of bookings

SELECT COUNT(*) AS num_bookings
FROM bookings;

-- Get info for class sessions
-- Include the number of bookings per session
-- Sort by number of bookings in descending order
-- Include class session with no bookings

SELECT
	COUNT(bookings.class_session_id) AS num_bookings,
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
	bookings.class_session_id,
	class_name,
	class_type,
	location_name,
	class_sessions.start_at,
	class_sessions.end_at
ORDER BY num_bookings DESC;
