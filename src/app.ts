import express from "express";
import restaurantRoutes from "./api/v1/routes/restaurant.routes";
import menuRoutes from "./api/v1/routes/menu.routes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

const app = express();
app.use(express.json());
app.use("/restaurants", restaurantRoutes);
app.use("/menu", menuRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("Food Ordering API running successfully!");
});

export default app;