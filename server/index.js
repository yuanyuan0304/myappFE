const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

const usersRouter = require("./routes/users");
app.use("/api/users", usersRouter);

// Simple test route
app.get("/api", (req, res) => {
  res.json({ message: "API is working!" });
});

// After all your routes
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
