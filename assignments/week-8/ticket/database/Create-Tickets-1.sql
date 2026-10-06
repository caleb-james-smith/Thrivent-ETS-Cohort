DROP TABLE IF EXISTS ticket;

CREATE TABLE ticket (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL
);

INSERT INTO ticket (title, description)
VALUES
	('Ticket 1', 'This is ticket 1.'),
	('Ticket 2', 'This is ticket 2.'),
	('Ticket 3', 'This is ticket 3.');

SELECT * FROM ticket;
