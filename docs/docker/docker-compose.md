# Docker Compose

## ¿Que es Docker Compose?

- Permite ejecutar containers con un fichero 

## docker-compose.yml
```yml
version: '2.3'
services:
  app:
    image: node:12.19.0-alpine3.12
    volumes:
      - ./:/usr/src/app
    ports:
      - 3001:3000
    environment:
      - PORT=3000
    command: node /usr/src/app/server.js
```

```yml

version: '3'
services:
  app:
    container_name: learndocker
    build:
      context: ${PWD}
      dockerfile: Dockerfile
    ports:
      - 3000:3000
    environment:
      - PORT=3000
    links: 
      - database
    volumes:
      - .:/usr/src/app
      
  database:
    container_name: learndocker-database
    image: mongo
    volumes:
      - ./db:/data/db
    logging: 
      driver: none
    ports:
      - "27017:27017"
    

```

## Comandos
```bash
docker-compose up
```