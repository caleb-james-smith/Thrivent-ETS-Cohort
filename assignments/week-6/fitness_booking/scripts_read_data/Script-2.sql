-- Get info for all class sessions

SELECT
	classes.name AS class_name,
	class_types.type AS class_type,
	locations.name AS location_name,
	class_sessions.start_at,
	class_sessions.end_at
FROM class_sessions
JOIN classes ON class_sessions.class_id = classes.id
JOIN locations ON class_sessions.location_id = locations.id
JOIN class_types ON class_types.id = classes.class_type_id;


