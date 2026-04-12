import { Router } from "express";
import * as controller from "../controllers/menu.controller";

const router = Router();

// GET /menu
router.get("/", controller.getMenuItems);

// POST /menu
router.post("/", controller.createMenuItem);

// PUT /menu/:id
router.put("/:id", controller.updateMenuItem);

// DELETE /menu/:id
router.delete("/:id", controller.deleteMenuItem);

/**
 * @swagger
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
router.post("/", controller.createMenuItem);

export default router;