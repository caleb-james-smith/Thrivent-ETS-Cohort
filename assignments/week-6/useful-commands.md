# Useful Commands

## Docker

Start a database:
```bash
docker compose up -d
```

Check for running containers:
```bash
docker ps
```

Stop a database without deleting data:
```bash
docker compose stop
```

Reset a database and delete all local data:
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
