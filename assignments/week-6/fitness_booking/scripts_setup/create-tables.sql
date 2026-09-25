CREATE TABLE "people" (
  "id" integer PRIMARY KEY,
  "first_name" varchar(255) NOT NULL,
  "last_name" varchar(255) NOT NULL,
  "email" varchar(255) UNIQUE NOT NULL,
  "phone_number" varchar(50) UNIQUE NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "roles" (
  "id" integer PRIMARY KEY,
  "name" varchar(255) UNIQUE NOT NULL
);

CREATE TABLE "people_roles" (
  "id" integer PRIMARY KEY,
  "person_id" integer NOT NULL,
  "role_id" integer NOT NULL
);

CREATE TABLE "classes" (
  "id" integer PRIMARY KEY,
  "class_type_id" integer NOT NULL,
  "name" varchar(255) UNIQUE NOT NULL,
  "description" varchar(500)
);

CREATE TABLE "class_types" (
  "id" integer PRIMARY KEY,
  "type" varchar(255) UNIQUE NOT NULL
);

CREATE TABLE "bookings" (
  "id" integer PRIMARY KEY,
  "member_id" integer NOT NULL,
  "class_session_id" integer NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "trainer_assignments" (
  "id" integer PRIMARY KEY,
  "trainer_id" integer NOT NULL,
  "class_session_id" integer NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "class_sessions" (
  "id" integer PRIMARY KEY,
  "class_id" integer NOT NULL,
  "location_id" integer NOT NULL,
  "start_at" timestamp,
  "end_at" timestamp
);

CREATE TABLE "locations" (
  "id" integer PRIMARY KEY,
  "name" varchar(255),
  "address" varchar(255) NOT NULL
);

CREATE TABLE "equipment" (
  "id" integer PRIMARY KEY,
  "name" varchar(255)
);

CREATE TABLE "equipment_requirements" (
  "id" integer PRIMARY KEY,
  "class_session_id" integer NOT NULL,
  "equipment_id" integer NOT NULL
);

ALTER TABLE "people_roles" ADD FOREIGN KEY ("person_id") REFERENCES "people" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "people_roles" ADD FOREIGN KEY ("role_id") REFERENCES "roles" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "bookings" ADD FOREIGN KEY ("member_id") REFERENCES "people" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "bookings" ADD FOREIGN KEY ("class_session_id") REFERENCES "class_sessions" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "trainer_assignments" ADD FOREIGN KEY ("trainer_id") REFERENCES "people" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "trainer_assignments" ADD FOREIGN KEY ("class_session_id") REFERENCES "class_sessions" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "class_sessions" ADD FOREIGN KEY ("location_id") REFERENCES "locations" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "class_sessions" ADD FOREIGN KEY ("class_id") REFERENCES "classes" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "classes" ADD FOREIGN KEY ("class_type_id") REFERENCES "class_types" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "equipment_requirements" ADD FOREIGN KEY ("class_session_id") REFERENCES "class_sessions" ("id") DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE "equipment_requirements" ADD FOREIGN KEY ("equipment_id") REFERENCES "equipment" ("id") DEFERRABLE INITIALLY IMMEDIATE;
