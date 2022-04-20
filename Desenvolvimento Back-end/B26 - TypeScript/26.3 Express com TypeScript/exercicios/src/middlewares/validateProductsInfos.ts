import { RequestHandler } from "express";
import Joi from "joi";

const ProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  brand: Joi.string().required(),
  price: Joi.number().positive().required(),
  manufacturingDate: Joi.date().required(),
  expirationDate: Joi.date().required(),
})
export const validateProductsInfos: RequestHandler = (req, res, next) => {
  const { error } = ProductSchema.validate(req.body)
  const { manufacturingDate, expirationDate } = req.body
  if (expirationDate === manufacturingDate) {
    return res.status(400).json({ message: "manufacturingDate cannot be equal to expirationDate" })
  }
  if (error) return res.status(400).json({ message: error.message })
  next()
}