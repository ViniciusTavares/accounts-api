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

Once the env file is set, we can start docker containers. The command below will start docker containers, and also run migrations, seeds and start the server on the chosen APP_PORT

```npm run start:docker:local```

___*___ When running the app inside the docker containers, change the DB_URL from DB_URL=mongodb://localhost:PORT to DB_URL=mongodb://mongodb:PORT

## Development

Install packages
```
npm install
```

Init infrastructure containers only

```
npm run start:docker:infra
```

Run migrations and seeds

```
npm run db:migrate:up

npm run db:seed
```

Start the server with livereload
```
npm run start:dev 
```

___*___ When running the app outside docker containers, change the DB_URL from DB_URL=mongodb://mongodb:PORT to DB_URL=mongodb://localhost:PORT

## Migrations and seeds

```npm run db:migrate:up``` 

```npm run db:seed```

## Tests

To run the all test suites ( unit, functional )

```npm run test``` 

Only unit tests

```npm run test:unit```

___*___ At the current stage, there is no functional tests. Only one example of unit test. 

## Routes Draft

### Accounts

```
Fetch Accounts
 
URL: [GET] {base}/accounts?filters={firstName,lastName,country,mfa}&sort={createdDate}&page=number

Examples
{base}/accounts
{base}/accounts?page=2
{base}/accounts?filter={"firstName":"Marilie","lastName":"Mitchell"}&sort={"createdDate":1}
{base}/accounts?filter={"firstName":"Marilie","country":"CR"}&sort={"createdDate":1}
{base}/accounts?filter={"firstName":"M","lastName":"M"}&sort={"createdDate":-1}
{base}/accounts?filter={"firstName":"Marilie","lastName":"Mitchell"}
```

```
Download Accounts in csv format
 
URL: [GET] {base}/accounts?filters={firstName,lastName,country,mfa}&sort={createdDate}&page=number

Examples
{base}/accounts/csv
{base}/accounts/csv?page=2
{base}/accounts/csv?filter={"firstName":"Marilie","lastName":"Mitchell"}&sort={"createdDate":1}
{base}/accounts/csv?filter={"firstName":"Marilie","country":"CR"}&sort={"createdDate":1}
{base}/accounts/csv?filter={"firstName":"M","lastName":"M"}&sort={"createdDate":-1}
{base}/accounts/csv?filter={"firstName":"Marilie","lastName":"Mitchell"}
```


