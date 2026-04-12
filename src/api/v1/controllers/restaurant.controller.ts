import { Request, Response } from "express";
import * as service from "../services/restaurant.service";
import { restaurantSchema } from "../validators/restaurant.validator";
import { sendEmail } from "../../../services/email.service";

// GET /restaurants
export const getRestaurants = (req: Request, res: Response) => {
  const data = service.getRestaurants();
  res.status(200).json(data);
};

// POST /restaurants
export const createRestaurant = async (req: Request, res: Response) => {
  const { error } = restaurantSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const data = service.addRestaurant(req.body);

  await sendEmail(); 

  res.status(201).json(data);
};

// PUT /restaurants/:id
export const updateRestaurant = (req: Request, res: Response) => {
  const { error } = restaurantSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const result = service.updateRestaurant(req.params.id as string, req.body);

  if (!result) {
    return res.status(404).json({ message: "Restaurant not found" });
  }

  res.status(200).json(result);
};

// DELETE /restaurants/:id
export const deleteRestaurant = (req: Request, res: Response) => {
  const success = service.deleteRestaurant(req.params.id as string);

  if (!success) {
    return res.status(404).json({ message: "Restaurant not found" });
  }

  res.status(200).json({ message: "Deleted successfully" });
};