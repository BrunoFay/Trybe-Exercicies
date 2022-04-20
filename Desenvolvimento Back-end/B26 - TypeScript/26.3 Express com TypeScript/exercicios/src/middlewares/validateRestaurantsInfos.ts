import Joi from "joi";
import { RequestHandler } from "express";

const RestaurantSchema = Joi.object({
  name: Joi.string().min(3).required(),
  category: Joi.string().min(3).required(),
  openingTime: Joi.string().required(),
  closingTime: Joi.string().required()
})
export const validateRestaurantInfos: RequestHandler = (req, res, next) => {
  const { error } = RestaurantSchema.validate(req.body)
  if (error) return res.status(400).json({ message: error.message })
  next()
}