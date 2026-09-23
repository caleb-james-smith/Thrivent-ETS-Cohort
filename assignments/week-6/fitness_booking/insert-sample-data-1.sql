-- roles

INSERT INTO roles (id, name)
VALUES
    (1, 'member'),
    (2, 'trainer');

-- people
-- timestamp format: YYYY-MM-DD HH:MM:SS

INSERT INTO people (id, first_name, last_name, email, phone_number, created_at)
VALUES
    (1, 'Andrew', 'Taylor', 'andrew@example.com', '111-222-3333', '2025-01-01 08:05:00'),
    (2, 'James', 'Taylor', 'jimmy@example.com', '555-555-5555', '2025-01-01 08:10:00'),
    (3, 'Emily', 'Johnson', 'emily@example.com', '123-456-7890', '2025-05-15 09:15:00'),
    (4, 'Chase', 'Williams', 'chase.williams@example.com', '333-222-1111', '2024-08-01 10:00:00'),
    (5, 'Jessica', 'Thomas', 'jthomas@example.com', '444-555-6666', '2024-03-01 14:30:00'),
    (6, 'Amy', 'Powers', 'amy.powers@example.com', '777-888-9999', '2025-06-10 16:45:00');

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
    (1, 'Strength Training'),
    (2, 'Upper Body Strength'),
    (3, 'Lower Body Strength'),
    (4, 'Cardio'),
    (5, 'Mobility'),
    (6, 'Speed'),
    (7, 'Endurance'),
    (8, 'Flexibility');

-- classes

INSERT INTO classes (id, class_type_id, name, description)
VALUES
    (1, 4, 'Morning Running', 'Start out your day with a morning run!'),
    (2, 5, 'Evening Walking', 'Join us for a comfortable evening walk.'),
    (3, 1, 'Morning Strength', 'Start out your day with strength training!'),
    (4, 2, 'Power Up', 'It''s time to power up! This class focuses on upper body strength.'),
    (5, 3, 'Power Down', 'It''s time to power down! This class focuses on lower body strength.');

-- locations

INSERT INTO locations (id, name, address)
VALUES
    (1, 'Millennium Park', '201 E Randolph St, Chicago, IL 60601'),
    (2, 'Lincoln Park Fitness Center', '444 W Fullerton Pkwy Apt 1, Chicago, IL 60614'),
    (3, 'Logan Square Gym', '2719 N Spaulding Ave Ste 204, Chicago, IL 60647');

-- class_sessions

INSERT INTO class_sessions (id, class_id, location_id, start_at, end_at)
VALUES
    (1, 1, 1, '2026-09-26 07:30:00', '2026-09-26 08:30:00'),
    (2, 2, 1, '2026-09-26 19:00:00', '2026-09-26 20:00:00'),
    (3, 1, 1, '2026-09-29 07:30:00', '2026-09-29 08:30:00'),
    (4, 2, 1, '2026-09-29 19:00:00', '2026-09-29 20:00:00'),
    (5, 3, 2, '2026-09-28 07:00:00', '2026-09-28 08:00:00'),
    (6, 3, 2, '2026-09-30 07:00:00', '2026-09-30 08:00:00'),
    (7, 4, 3, '2026-09-29 17:00:00', '2026-09-29 18:00:00'),
    (8, 5, 3, '2026-10-01 17:00:00', '2026-10-01 18:00:00');

-- bookings

INSERT INTO bookings (id, member_id, class_session_id)
VALUES
    (1, 1, 1),
    (2, 3, 1),
    (3, 1, 2),
    (4, 2, 2),
    (5, 3, 2),
    (6, 1, 6),
    (7, 2, 6),
    (8, 3, 6),
    (9, 1, 7),
    (10, 2, 7),
    (11, 2, 8);

-- trainer_assignments

INSERT INTO trainer_assignments (id, trainer_id, class_session_id)
VALUES
    (1, 4, 1),
    (2, 5, 1),
    (3, 6, 2),
    (4, 5, 3),
    (5, 4, 5),
    (6, 5, 5),
    (7, 6, 5),
    (8, 4, 6),
    (9, 4, 7),
    (10, 5, 7),
    (11, 6, 8);

-- equipment

INSERT INTO equipment (id, name)
VALUES
    (1, 'Dumbbells'),
    (2, 'Kettlebells'),
    (3, 'Barbells'),
    (4, 'Bench Press'),
    (5, 'Medicine Balls'),
    (6, 'Resistance Bands'),
    (7, 'Mats');

-- equipment_requirements

INSERT INTO equipment_requirements (id, class_session_id, equipment_id)
VALUES
    (1, 5, 1),
    (2, 5, 2),
    (3, 5, 7),
    (4, 6, 1),
    (5, 6, 2),
    (6, 6, 7),
    (7, 7, 1),
    (8, 7, 4),
    (9, 7, 7),
    (10, 8, 2),
    (11, 8, 3),
    (12, 8, 7);
