import "dotenv/config";
import express from "express";
import seashellRoutes from "./routes/seashellRoutes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🐚 API running at http://localhost:${PORT}`);
});