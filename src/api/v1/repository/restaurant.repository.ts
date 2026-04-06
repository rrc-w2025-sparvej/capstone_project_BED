import { Restaurant } from "../models/restaurant.model";

let restaurants: Restaurant[] = [];

export const getAllRestaurants = (): Restaurant[] => {
  return restaurants;
};

// CREATE restaurant
export const createRestaurant = (data: Restaurant): Restaurant => {
  const newRestaurant = {
    id: Date.now().toString(),
    ...data,
  };
  restaurants.push(newRestaurant);
  return newRestaurant;
};

// UPDATE restaurant
export const updateRestaurant = (id: string, data: Partial<Restaurant>) => {
  const index = restaurants.findIndex(r => r.id === id);
  if (index === -1) return null;

  restaurants[index] = { ...restaurants[index], ...data };
  return restaurants[index];
};

// DELETE restaurant
export const deleteRestaurant = (id: string) => {
  const index = restaurants.findIndex(r => r.id === id);
  if (index === -1) return false;

  restaurants.splice(index, 1);
  return true;
};