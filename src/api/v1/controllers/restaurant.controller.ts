import { Request, Response } from "express";
import * as service from "../services/restaurant.service";

// GET /restaurants
export const getRestaurants = (req: Request, res: Response) => {
  const data = service.getRestaurants();
  res.status(200).json(data);
};

// POST /restaurants
export const createRestaurant = (req: Request, res: Response) => {
  const data = service.addRestaurant(req.body);
  res.status(201).json(data);
};