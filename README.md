# Accounts Api 

This repository is a sample of Microservices using NodeJS, Typescript, MongoDB, Jest and Domain Driven Design principles. 

## Tools

- NodeJS
- Typescript
- MongoDB
- Docker
- Jest

## Requirements 

- NodeJS 12+
- Docker
- Docker Compose 

___*___ If you're using nvm, just run ```nvm install``` and it resolve the proper Node version for you.

___*___ [Reference to install docker compose](https://docs.docker.com/compose/install) on Linux, Mac and Windows

## Principles and concepts

This project applies and follows a variaty of Software Engineering Principles as listed below

- SOLID
- DRY
- Domain Driven Design ( DDD )
- Test Driven Design ( TDD) 
- Object Oriented Programming ( OOP )

## Running

Copy the .env.sample to the root folder.
```cp .env.example .env```

You might need to change the default values, such as DB_PORT and APP_PORT in case they have been used by another application.

Once the env file is set, we can start docker containers

```npm run start:docker:dev```

The command above should start all containers, including the api runnning on the chosen APP_PORT.

## Migrations and seeds

```npm run db:migrate:up```
```npm run db:seed```

## Tests

To run the all test suites ( unit, functional )

```npm run test``` 

Only unit tests

```npm run test:unit```

* At the current stage, there is no functional tests. Only one example of unit test. 

