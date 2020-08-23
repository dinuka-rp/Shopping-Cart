# Shopping-Cart

[![CodeFactor](https://www.codefactor.io/repository/github/dinuka-rp/shopping-cart/badge?s=8bd602f3f7f8c25283b8dbeb5079e9dd11681e75)](https://www.codefactor.io/repository/github/dinuka-rp/shopping-cart)

Full-stack take home assessment @ Zone24x7

## Prerequisites

- React
- NestJS
- MySQL

## Development Setup

#### Clone the Project

`git clone https://github.com/dinuka-rp/Shopping-Cart.git`

<hr/>

### Backend

#### Add the database configuration

Create a file called `.env` in the root folder of the backend and add the following environment variables.

```
- DB_NAME
- DB_PORT
- DB_USER
- DB_PASSWORD
```

Optional variables: These have been given the following defaults

```
- DB_TYPE=mysql
- DB_HOST=localhost
```

Make sure that the database has been created before running the backend.

### Frontend

#### Add the backend end-point

Create another `.env` file in the root folder of the frontend and add the following environment variable. This should be the hosted endpoint of the backend.

```
- REACT_APP_API_ENDPOINT
```

The listening port of the backend has been set to 3001 in the `main.ts` file in the backend folder. Therefore if run locally,
_REACT_APP_API_ENDPOINT=http://localhost:3001/api/v1/_ is expected as the endpoint

<hr/>
#### Run the Backend/ Frotnend

`yarn start`

<!-- > Use --build only when you run it for the first time or if you have made changes to the code

```docker-compose up --build``` -->

<hr/>

##### [Project Specification](https://docs.google.com/document/d/14DZ95y8sMXMlmLBU4mQaHyqW6jXmj2GAj_-MaS4aXLk/edit?ts=5efc5b3a#)
