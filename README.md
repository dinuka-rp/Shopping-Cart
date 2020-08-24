# Shopping-Cart

[![CodeFactor](https://www.codefactor.io/repository/github/dinuka-rp/shopping-cart/badge?s=8bd602f3f7f8c25283b8dbeb5079e9dd11681e75)](https://www.codefactor.io/repository/github/dinuka-rp/shopping-cart)

Full-stack take home assessment @ Zone24x7

## Prerequisites

- React
- NestJS
- MySQL
- Yarn

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

#### Install Packages in Backend & Frotnend

Run `yarn install` in the root folder of each project.

<hr/>

#### Run the Backend/ Frotnend

Run `yarn start` in the root folder of each project.

<!-- > Use --build only when you run it for the first time or if you have made changes to the code

```docker-compose up --build``` -->

<hr/>

##### [Project Specification](https://docs.google.com/document/d/14DZ95y8sMXMlmLBU4mQaHyqW6jXmj2GAj_-MaS4aXLk/edit?ts=5efc5b3a#)
##### [UI Wireframes](https://projects.invisionapp.com/share/F3W3F8BKJEV)

#### Requirements Completition status

- [x] Users should be able to register into the application (by providing email, password and mobile number).
- [x] User login (username and password).
- [x] Available products need to be shown on the homepage as a grid view.
- [x] Users should be able to search for available products.
- [x] Logged in users should be able to rate the product. The average rate should be shown in the product.
- [x] Users should be able to add products to a shopping cart.
- [x] Number of product items need to be indicated in the mini cart in the top-bar. 
- [ ] The shopping cart needs to be available for logged in users when the user revisits (The shopping cart needs to be visible even after reopening a closed browser) 
- [x] Users should be able to continue shopping or checkout in the shopping cart view.
- [x] When the checkout button is clicked, the shopping cart state needs to be changed according to the general flow.
- [x] order details need to be matched with cart details when the checkout happens.

<br/>

- [x] Pagination for product grid
- [x] Responsiveness of the frontend app

##### Technology Requirements
Frontend
- [x] React using *create-react-app*
- [x] TypeScript
- [x] Ant Design - UI Framework
- [x] Redux 

Backend
- [x] NestJS
- [x] TypeScript
- [x] TypeORM
- [ ] PostgreSQL
- [x] JWT
- [x] Refresh token

