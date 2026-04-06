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