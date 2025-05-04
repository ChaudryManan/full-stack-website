import connectDB from "./db/index.js";
import app from "./app.js";
import serverless from "serverless-http";

let serverlessHandler; // Renamed variable to avoid conflict

// Connect to the database
connectDB()
  .then(() => {
    console.log("Database connected!");
    serverlessHandler = serverless(app); // Assign the serverless handler AFTER DB connects
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });

// Export the handler
export const handler = async (event, context) => {
  // Wait for the serverlessHandler to be initialized
  while (!serverlessHandler) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  return serverlessHandler(event, context);
};