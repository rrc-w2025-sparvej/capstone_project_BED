import { Router } from "express";
import * as controller from "../controllers/restaurant.controller";
import { verifyToken } from "../middleware/auth.middleware";
const router = Router();

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
router.post("/", verifyToken, controller.createRestaurant);

/**
 * @swagger
 * /restaurants/{id}:
 *   put:
 *     summary: Update restaurant
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Updated
 */
router.put("/:id", verifyToken, controller.updateRestaurant);

/**
 * @swagger
 * /restaurants/{id}:
 *   delete:
 *     summary: Delete restaurant
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete("/:id", verifyToken, controller.deleteRestaurant);

export default router;