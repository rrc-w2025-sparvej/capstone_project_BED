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

/**
 * @swagger
 * /restaurants:
 *   get:
 *     summary: Get all restaurants
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", controller.getRestaurants);

/**
 * @swagger
 * /restaurants:
 *   post:
 *     summary: Create a restaurant
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               location:
 *                 type: string
 *               cuisineType:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post("/", controller.createRestaurant);

export default router;