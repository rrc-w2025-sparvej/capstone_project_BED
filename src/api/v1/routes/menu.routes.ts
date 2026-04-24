import { Router } from "express";
import * as controller from "../controllers/menu.controller";
import { verifyToken } from "../middleware/auth.middleware";

const router = Router();

/**
 * @swagger
 * 
 * /menu:
 *   get:
 *     summary: Get all menu items
 *     responses:
 *       200:
 *         description: List of menu items
 */
router.get("/", controller.getMenuItems);

/**
 * @swagger
 * /menu:
 *   post:
 *     summary: Create a menu item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *               restaurantId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Menu item created
 */
router.post("/", verifyToken, controller.createRestaurant);

/**
 * @swagger
 * /menu/{id}:
 *   put:
 *     summary: Update menu item
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
 * /menu/{id}:
 *   delete:
 *     summary: Delete menu item
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