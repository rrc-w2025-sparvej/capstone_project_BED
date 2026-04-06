import express from "express";
import restaurantRoutes from "./api/v1/routes/restaurant.routes";


const app = express();
app.use(express.json());
app.use("/restaurants", restaurantRoutes);

app.get("/", (req, res) => {
  res.send("Food Ordering API running successfully!");
});

export default app;