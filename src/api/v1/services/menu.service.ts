import * as repo from "../repository/menu.repository";
import { MenuItem } from "../models/menu.model";

// GET all menu items
export const getMenuItems = (): MenuItem[] => {
  return repo.getAllMenuItems();
};

// CREATE menu item
export const addMenuItem = (data: MenuItem): MenuItem => {
  return repo.createMenuItem(data);
};

// UPDATE menu item
export const updateMenuItem = (id: string, data: Partial<MenuItem>) => {
  return repo.updateMenuItem(id, data);
};

// DELETE menu item
export const deleteMenuItem = (id: string) => {
  return repo.deleteMenuItem(id);
};