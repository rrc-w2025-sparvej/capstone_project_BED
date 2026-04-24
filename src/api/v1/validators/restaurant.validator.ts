import Joi from "joi";

export const restaurantSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string().required(),
  cuisineType: Joi.string().required(),
});