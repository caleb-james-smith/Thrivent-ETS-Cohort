-- roles

INSERT INTO roles (id, name)
VALUES
    (1, "member"),
    (2, "trainer");

-- people
-- timestamp format: YYYY-MM-DD HH:MM:SS

INSERT INTO people (id, first_name, last_name, email, phone_number, created_at)
VALUES
    (1, "Andrew", "Taylor", "andrew@example.com", "111-222-3333", "2025-01-01 08:05:00"),
    (2, "James", "Taylor", "jimmy@example.com", "555-555-5555", "2025-01-01 08:10:00"),
    (3, "Emily", "Johnson", "emily@example.com", "123-456-7890", "2025-05-15 09:15:00"),
    (4, "Chase", "Williams", "chase.williams@example.com", "333-222-1111", "2024-08-01 10:00:00"),
    (5, "Jessica", "Thomas", "jthomas@example.com", "444-555-6666", "2024-03-01 14:30:00"),
    (6, "Amy", "Powers", "amy.powers@example.com", "777-888-9999", "2025-06-10 16:45:00");

-- people_roles

INSERT INTO people_roles (id, person_id, role_id)
VALUES
    (1, 1, 1),
    (1, 2, 1),
    (1, 3, 1),
    (1, 4, 2),
    (1, 5, 2),
    (1, 6, 2);

-- class_types

INSERT INTO class_types (id, type) 
VALUES
    (1, "Cardio"),
    (2, "Comfort");

-- classes

INSERT INTO classes (id, class_type_id, name, description)
VALUES
    (1, 1, "Morning Running", "Start out your day with a morning run!"),
    (2, 2, "Evening Walking", "Join us for a comfortable evening walk.");

-- locations
INSERT INTO locations (id, name, address)
VALUES
    (1, "Millennium Park", "201 E Randolph St, Chicago, IL 60601");

-- class_sessions

INSERT INTO class_sessions (id, class_id, location_id, start_at, end_at)
VALUES
    (1, 1, 1, "2026-09-26 07:30:00", "2026-09-26 08:30:00"),
    (1, 2, 1, "2026-09-26 07:30:00", "2026-09-26 08:30:00");
