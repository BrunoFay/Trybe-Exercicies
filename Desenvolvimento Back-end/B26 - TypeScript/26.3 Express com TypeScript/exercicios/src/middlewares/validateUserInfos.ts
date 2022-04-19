import { RequestHandler } from 'express';
import Joi from 'joi';

const UserSchema = Joi.object({
  name: Joi.string().min(3).required(),
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
})
export const userValidateInfos: RequestHandler = (req, res, next) => {
  const { error } = UserSchema.validate(req.body)
  if (error) return res.status(400).json({ message: error.message })
  next()
}