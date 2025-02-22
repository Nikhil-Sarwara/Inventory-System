# Inventory System

A simple inventory system built with Node.js, Express, GraphQL, and MongoDB.

## Features

- Create, read, update, and delete products
- Search for products by name or price
- Sort products by name or price
- Pagination support

## Getting Started

### Prerequisites

- Node.js installed on your system
- MongoDB installed and running on your system

### Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the server

### Usage

Open your web browser and navigate to `http://localhost:5000/graphql` to access the GraphQL playground.

### GraphQL Schema

The GraphQL schema is defined in `schema/typeDefs.js`. The schema includes the following types:

- `Product`: A product with a name, price, and quantity
- `Query`: A query type with the following fields:
  - `products`: Returns a list of all products
  - `product(id: ID!)`: Returns a single product by ID
- `Mutation`: A mutation type with the following fields:
  - `createProduct(name: String!, price: Float!, quantity: Int!)`: Creates a new product
  - `updateProduct(id: ID!, name: String, price: Float, quantity: Int)`: Updates an existing product
  - `deleteProduct(id: ID!)`: Deletes a product

### API Endpoints

The API endpoints are defined in `routes/productRoutes.js`. The API endpoints are:

- `GET /products`: Returns a list of all products
- `GET /products/:id`: Returns a single product by ID
- `POST /products`: Creates a new product
- `PUT /products/:id`: Updates an existing product
- `DELETE /products/:id`: Deletes a product

### Environment Variables

The following environment variables are used in the application:

- `MONGO_URI`: The MongoDB connection string
- `PORT`: The port number to use for the server (defaults to 5000)

### License

This project is licensed under the MIT License. See `LICENSE.md` for details.
