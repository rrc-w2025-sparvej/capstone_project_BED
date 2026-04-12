import { Router } from "express";
import * as controller from "../controllers/restaurant.controller";

const router = Router();

// GET /restaurants
router.get("/", controller.getRestaurants);

// POST /restaurants
router.post("/", controller.createRestaurant);

// Update
router.put("/:id", controller.updateRestaurant);

// DELETE
router.delete("/:id", controller.deleteRestaurant);

// swagger
router.get("/", controller.getRestaurants);

router.post("/", controller.createRestaurant);

export default router;