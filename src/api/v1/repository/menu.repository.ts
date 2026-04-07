import { MenuItem } from "../models/menu.model";

let menuItems: MenuItem[] = [];

// GET all menu items
export const getAllMenuItems = (): MenuItem[] => {
  return menuItems;
};

// CREATE menu item
export const createMenuItem = (data: MenuItem): MenuItem => {
  const newItem = {
    id: Date.now().toString(),
    ...data,
  };
  menuItems.push(newItem);
  return newItem;
};

// UPDATE menu item
export const updateMenuItem = (id: string, data: Partial<MenuItem>) => {
  const index = menuItems.findIndex(item => item.id === id);
  if (index === -1) return null;

  menuItems[index] = { ...menuItems[index], ...data };
  return menuItems[index];
};

// DELETE menu item
export const deleteMenuItem = (id: string) => {
  const index = menuItems.findIndex(item => item.id === id);
  if (index === -1) return false;

  menuItems.splice(index, 1);
  return true;
};