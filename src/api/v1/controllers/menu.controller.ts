import { Request, Response } from "express";
import * as service from "../services/menu.service";

// GET /menu
export const getMenuItems = (req: Request, res: Response) => {
  const data = service.getMenuItems();
  res.status(200).json(data);
};

// POST /menu
export const createMenuItem = (req: Request, res: Response) => {
  const data = service.addMenuItem(req.body);
  res.status(201).json(data);
};

// PUT /menu/:id
export const updateMenuItem = (req: Request, res: Response) => {
  const result = service.updateMenuItem(req.params.id as string, req.body);

  if (!result) {
    return res.status(404).json({ message: "Menu item not found" });
  }

  res.status(200).json(result);
};

// DELETE /menu/:id
export const deleteMenuItem = (req: Request, res: Response) => {
  const success = service.deleteMenuItem(req.params.id as string);

  if (!success) {
    return res.status(404).json({ message: "Menu item not found" });
  }

  res.status(200).json({ message: "Deleted successfully" });
};