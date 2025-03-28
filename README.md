# Mini Data Query Simulation Engine

A natural language query processing engine that simulates database queries for business analytics.

## Live Demo

[Live API Demo](https://mini-data-query-simulation-engine-pu7a.onrender.com)

## GitHub Repository

[View on GitHub](https://github.com/novneetsingh/mini-data-query-simulation-engine)

## Features

- Natural language query processing
- Query safety validation
- Query explanation generation
- Business metrics analysis (revenue, sales, customer satisfaction)

## Project Structure

```
mini-data-query-simulation-engine/
├── config/
│   └── database.js         # Mock database and data access functions
├── controllers/
│   └── queryController.js  # Request handlers for query endpoints
├── routes/
│   └── queryRoutes.js      # API route definitions
├── services/
│   └── queryService.js     # Business logic for query processing
├── .gitignore
├── index.js               # Main application entry point
├── package.json
└── README.md
```

## API Documentation

### 1. Process Query

**Endpoint:** `POST /api/v1/query`

**Request:**

```json
{
  "query": "what is the total revenue"
}
```

**Response:**

```json
{
  "status": "success",
  "query": "what is the total revenue",
  "translatedQuery": "SELECT SUM(totalRevenue) FROM salesData",
  "results": {
    "totalRevenue": 850000,
    "currency": "INR"
  }
}
```

### 2. Explain Query

**Endpoint:** `POST /api/v1/explain`

**Request:**

```json
{
  "query": "show customer satisfaction"
}
```

**Response:**

```json
{
  "status": "success",
  "explanation": "Computes average customer satisfaction score"
}
```

### 3. Validate Query

**Endpoint:** `POST /api/v1/validate`

**Request:**

```json
{
  "query": "show total revenue"
}
```

**Response:**

```json
{
  "status": "success",
  "isValid": true,
  "reason": "Query is safe to process"
}
```

## Sample Queries

### 1. Revenue Analysis

```json
// Request
POST /api/v1/query
{
  "query": "what is the total revenue"
}

// Response
{
  "status": "success",
  "query": "what is the total revenue",
  "translatedQuery": "SELECT SUM(totalRevenue) FROM salesData",
  "results": {
    "totalRevenue": 850000,
    "currency": "INR"
  }
}
```

### 2. Customer Satisfaction

```json
// Request
POST /api/v1/query
{
  "query": "show customer satisfaction"
}

// Response
{
  "status": "success",
  "query": "show customer satisfaction",
  "translatedQuery": "SELECT AVG(satisfactionScore) FROM customerData",
  "results": {
    "averageSatisfaction": "88.50",
    "scale": "0-100"
  }
}
```

### 3. Quarterly Sales

```json
// Request
POST /api/v1/query
{
  "query": "show sales for Q1 2024"
}

// Response
{
  "status": "success",
  "query": "show sales for Q1 2024",
  "translatedQuery": "SELECT * FROM salesData WHERE quarter = 'Q1 2024'",
  "results": {
    "quarter": "Q1 2024",
    "totalRevenue": 250000,
    "averageProductSale": 1250,
    "totalProducts": 200,
    "region": "North"
  }
}
```

## Available Data Models

### Sales Data Structure

```json
{
  "quarter": "Q1 2024",
  "totalRevenue": 250000,
  "averageProductSale": 1250,
  "totalProducts": 200,
  "region": "North"
}
```

### Customer Data Structure

```json
{
  "id": 1,
  "name": "Tech Innovations",
  "satisfactionScore": 85,
  "segment": "Enterprise",
  "totalSpend": 150000
}
```

## Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/novneetsingh/mini-data-query-simulation-engine.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node index.js
```

## Tech Stack

- Node.js
- Express.js
- REST API architecture
- Deployed on Render
