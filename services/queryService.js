const {
  getAverageCustomerSatisfaction,
  getTotalRevenue,
  findSalesByQuarter,
} = require("../config/database");

// Helper function to process natural language query
exports.processNaturalLanguageQuery = (query) => {
  const lowerQuery = query.toLowerCase();

  // Different query processing logic
  if (lowerQuery.includes("total revenue")) {
    return {
      translatedQuery: "SELECT SUM(totalRevenue) FROM salesData",
      results: {
        totalRevenue: getTotalRevenue(),
        currency: "INR",
      },
    };
  }

  if (lowerQuery.includes("customer satisfaction")) {
    return {
      translatedQuery: "SELECT AVG(satisfactionScore) FROM customerData",
      results: {
        averageSatisfaction: getAverageCustomerSatisfaction(),
        scale: "0-100",
      },
    };
  }

  if (lowerQuery.includes("sales for")) {
    // Match both "Q1" and "quarter 1" patterns, and capture year if present
    const quarterMatch = lowerQuery.match(
      /(?:q|quarter)\s?(\d+)(?:\s+(\d{4}))?/i
    );

    if (!quarterMatch) {
      return {
        translatedQuery: "INVALID_QUARTER",
        results: { message: "Quarter number not specified in query" },
      };
    }

    const quarter = quarterMatch[1];
    const year = quarterMatch[2] || new Date().getFullYear().toString(); // Use current year if not specified

    return {
      translatedQuery: `SELECT * FROM salesData WHERE quarter = ${quarter} AND year = ${year}`,
      results: findSalesByQuarter(quarter, year),
    };
  }

  return {
    translatedQuery: "UNKNOWN_QUERY",
    results: { message: "Query could not be processed" },
  };
};

// Helper function to generate query explanation
exports.generateQueryExplanation = (query) => {
  const lowerQuery = query.toLowerCase();

  const explanations = {
    revenue: "Calculates total revenue across all quarters",
    satisfaction: "Computes average customer satisfaction score",
    sales: "Retrieves sales data for specific periods",
  };

  const matchedKey = Object.keys(explanations).find((key) =>
    lowerQuery.includes(key)
  );

  return matchedKey
    ? explanations[matchedKey]
    : "Unable to provide explanation for this query";
};

// Helper function to validate query safety
exports.validateQuerySafety = (query) => {
  // Check for potentially harmful keywords
  const unsafePatterns = ["drop", "delete", "truncate", "alter", "insert"];

  const hasUnsafePattern = unsafePatterns.some((pattern) =>
    query.toLowerCase().includes(pattern)
  );

  return {
    isValid: !hasUnsafePattern,
    reason: hasUnsafePattern
      ? "Query contains potentially harmful keywords"
      : "Query is safe to process",
  };
};
