# Mini Data Query Simulation Engine

A natural language query processing engine that simulates database queries for business analytics.

## Features

- Natural language query processing
- Query safety validation
- Query explanation generation
- Business metrics analysis (revenue, sales, customer satisfaction)

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the server:
```bash
node index.js
```
The server will run on port 5000.

## API Endpoints

### Process Query
- **POST** `/api/v1/query`
- Body: `{ "query": "show total revenue" }`

### Explain Query
- **GET** `/api/v1/explain`

### Validate Query
- **POST** `/api/v1/validate`
- Body: `{ "query": "show total revenue" }`

## Example Queries

```json
// Get total revenue
POST /api/v1/query
{
  "query": "what is the total revenue"
}

// Get customer satisfaction
POST /api/v1/query
{
  "query": "show customer satisfaction"
}

// Get sales by quarter
POST /api/v1/query
{
  "query": "show sales for quarter 1"
}
```

## Sample Responses

### Total Revenue Query
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

### Customer Satisfaction Query
```json
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

### Query Validation Response
```json
{
  "status": "success",
  "isValid": true,
  "reason": "Query is safe to process"
}
```

### Query Explanation Response
```json
{
  "status": "success",
  "explanation": "Calculates total revenue across all quarters"
}
```

## Available Data

The engine processes queries for:
- Sales data (quarterly revenue, products, regions)
- Customer satisfaction metrics
- Business segments analysis

## Tech Stack

- Node.js
- Express.js
- REST API architecture
