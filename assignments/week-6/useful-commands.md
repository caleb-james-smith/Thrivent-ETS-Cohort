# Useful Commands

## Docker

Start a container:
```bash
docker compose up
```

Start a container in headless mode to run in the background (detach):
```bash
docker compose up -d
```

Build a Docker image and start a container:
```bash
docker compose up --build
```

Check for running containers:
```bash
docker ps
```

List volumes:
```bash
docker volume ls 
```

Stop a database without deleting data:
```bash
docker compose stop
```

Remove container:
```bash
docker compose down
```

Remove named volumes for the project; Resets database and deletes all local data:
```bash
docker compose down -v
```

Syntax to a start shell session for a postgres database:
```bash
docker exec -it <container> psql -d <database> -U <user>
```

Example:
```bash
docker exec -it postgres psql -d postgres -U admin
```

Example:
```bash
docker exec -it postgres_container psql -d fitness_booking -U app_user
```

Syntax to execute an SQL script:
```bash
docker exec -i <container> psql -d <database> -U <user> < script.sql
```

Example:
```bash
docker exec -i postgres_container psql -d fitness_booking -U app_user < create-tables.sql
```

## psql

List the tables in the database:
```
\dt
```

Show table information, including columns and keys:
```
\d table_name
```

## SQL


