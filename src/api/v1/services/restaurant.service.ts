import * as repo from "../repository/restaurant.repository";
import { Restaurant } from "../models/restaurant.model";

// GET all restaurants
export const getRestaurants = (): Restaurant[] => {
  return repo.getAllRestaurants();
};

// ADD new restaurant
export const addRestaurant = (data: Restaurant): Restaurant => {
  return repo.createRestaurant(data);
};