import "dotenv/config";
import express from "express";
import seashellRoutes from "./routes/seashellRoutes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";
import { notFound, errorHandler } from "./middleware/errorHandlers";

const app = express();

app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Seashell API routes
app.use("/seashells", seashellRoutes);

// Swagger docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 404 handler (after all routes)
app.use(notFound);

// Global error handler (last middleware)
app.use(errorHandler);


export default app;
