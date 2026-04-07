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

export default router;