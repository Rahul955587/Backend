import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";
import { errorHandler } from "./middlewares/middleware.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

// Error handler
app.use(errorHandler);

export default app;
