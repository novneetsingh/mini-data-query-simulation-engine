const {
  processNaturalLanguageQuery,
  generateQueryExplanation,
  validateQuerySafety,
} = require("../services/queryService");

// Query Processing Function
exports.processQuery = (req, res) => {
  try {
    const { query } = req.body;

    // Translate and process query
    const processedQuery = processNaturalLanguageQuery(query);

    res.json({
      status: "success",
      query: query,
      translatedQuery: processedQuery.translatedQuery,
      results: processedQuery.results,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

// Query Explanation Function
exports.explainQuery = (req, res) => {
  try {
    const { query } = req.body;

    const explanation = generateQueryExplanation(query);

    res.json({
      status: "success",
      explanation: explanation,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

// Query Validation Function
exports.validateQuery = (req, res) => {
  try {
    const { query } = req.body;

    const validationResult = validateQuerySafety(query);

    res.json({
      status: "success",
      isValid: validationResult.isValid,
      reason: validationResult.reason,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};
