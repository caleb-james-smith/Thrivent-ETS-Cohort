-- Tech Talk 1

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
	class_name,
	class_type,
	location_name,
	class_sessions.start_at,
	class_sessions.end_at
ORDER BY num_bookings DESC;
