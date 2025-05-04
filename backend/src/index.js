import connectDB from "./db/index.js";
import app from "./app.js";
import serverless from 'serverless-http';

// Connect to the database
connectDB()
  .then(() => {
    // Start the server only in a non-production environment (e.g., local development)
    if (process.env.NODE_ENV !== 'production') {
      const port = process.env.PORT || 8000;
      app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    }
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });

// Export the serverless-wrapped app for Vercel
export const handler = serverless(app);