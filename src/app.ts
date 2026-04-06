import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Food Ordering API running successfully!");
});

export default app;