const express = require("express");
const app = express();
const cors = require("cors");

// Import the routes
const queryRoutes = require("./routes/queryRoutes");

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Define port number
const PORT = 5000;

// Route setup
app.use("/api/v1/", queryRoutes);

// Activate server
app.listen(PORT, () => {
  console.log("Server is running on port", PORT); // Log server activation
});
