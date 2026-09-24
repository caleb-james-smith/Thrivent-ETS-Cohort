-- Assignment 4: Join

-- Get info for all class sessions

SELECT
	c.name AS class_name,
	ct.type AS class_type,
	c.description,
	l.name AS location_name,
	cs.start_at,
	cs.end_at
FROM class_sessions AS cs
JOIN classes AS c
	ON cs.class_id = c.id
JOIN locations AS l
	ON cs.location_id = l.id
JOIN class_types AS ct
	ON ct.id = c.class_type_id;

-- Get readable info for bookings for all members
-- Include class session and class info
-- Sort by last name, first name, people id, and start time, all in ascending order

SELECT
	p.first_name,
	p.last_name,
	r.name AS role,
	c.name AS class_name,
	ct.type AS class_type,
	cs.start_at,
	cs.end_at
FROM bookings AS b
JOIN people AS p
	ON p.id = b.member_id
JOIN people_roles AS pr
	ON pr.person_id = p.id
JOIN roles AS r
	ON r.id = pr.role_id
JOIN class_sessions AS cs
	ON cs.id = b.class_session_id
JOIN classes AS c
	ON c.id = cs.class_id
JOIN class_types AS ct
	ON ct.id = c.class_type_id
WHERE
	r.name = 'member'
ORDER BY
	p.last_name,
	p.first_name,
	p.id,
	cs.start_at;

SELECT * FROM people;

-- Get email for a specific person

SELECT people.email
FROM people
WHERE
	first_name = 'Andrew' AND
	last_name = 'Taylor';

-- Get id for a specific person

SELECT people.id
FROM people
WHERE people.email = 'andrew@example.com';
--WHERE people.first_name = 'Andrew' AND people.last_name = 'Taylor';

-- Get info for the bookings for a specific member
-- Include class session and class info
-- Sort by start time in ascending order

SELECT
	p.first_name,
	p.last_name,
	c.name AS class_name,
	ct.type AS class_type,
	cs.start_at,
	cs.end_at
FROM bookings AS b
JOIN people AS p
	ON p.id = b.member_id
JOIN class_sessions AS cs
	ON cs.id = b.class_session_id
JOIN classes AS c
	ON c.id = cs.class_id
JOIN class_types AS ct
	ON ct.id = c.class_type_id
WHERE
	p.first_name = 'Andrew' AND p.last_name = 'Taylor'
	--p.email = 'andrew@example.com'
	--p.id = (SELECT people.id FROM people WHERE people.email = 'andrew@example.com')
ORDER BY
	cs.start_at;

-- Get readable info for trainer assignments for all trainers
-- Include class session and class info
-- Sort by last name, first name, people id, and start time, all in ascending order

SELECT
	p.first_name,
	p.last_name,
	r.name AS role,
	c.name AS class_name,
	ct.type AS class_type,
	cs.start_at,
	cs.end_at
FROM trainer_assignments AS ta
JOIN people AS p
	ON p.id = ta.trainer_id
JOIN people_roles AS pr
	ON pr.person_id = p.id
JOIN roles AS r
	ON r.id = pr.role_id
JOIN class_sessions AS cs
	ON cs.id = ta.class_session_id
JOIN classes AS c
	ON c.id = cs.class_id
JOIN class_types AS ct
	ON ct.id = c.class_type_id
WHERE
	r.name = 'trainer'
ORDER BY
	p.last_name,
	p.first_name,
	p.id,
	cs.start_at;

SELECT * FROM people;

-- Get email for a specific person

SELECT people.email
FROM people
WHERE
	first_name = 'Chase' AND
	last_name = 'Williams';

-- Get readable info for trainer assignments for a specific trainer
-- Include class session and class info
-- Sort by start time in ascending order

SELECT
	p.first_name,
	p.last_name,
	c.name AS class_name,
	ct.type AS class_type,
	cs.start_at,
	cs.end_at
FROM trainer_assignments AS ta
JOIN people AS p
	ON p.id = ta.trainer_id
JOIN class_sessions AS cs
	ON cs.id = ta.class_session_id
JOIN classes AS c
	ON c.id = cs.class_id
JOIN class_types AS ct
	ON ct.id = c.class_type_id
WHERE
	p.first_name = 'Chase' AND p.last_name = 'Williams'
	--p.email = 'chase.williams@example.com'
	--p.id = (SELECT people.id FROM people WHERE people.email = 'chase.williams@example.com')
ORDER BY
	cs.start_at;
