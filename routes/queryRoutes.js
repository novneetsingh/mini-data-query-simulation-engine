const express = require("express");
const router = express.Router();

const {
  processQuery,
  explainQuery,
  validateQuery,
} = require("../controllers/queryController");

// Route to process natural language queries
router.post("/query", processQuery);

// Route to explain query structure
router.post("/explain", explainQuery);

// Route to validate query feasibility
router.post("/validate", validateQuery);

module.exports = router;
