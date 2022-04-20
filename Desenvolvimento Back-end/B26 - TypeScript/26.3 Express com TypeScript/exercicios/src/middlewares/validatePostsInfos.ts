import { RequestHandler } from 'express';
import Joi from 'joi';

const PostSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().min(3).required(),
  category: Joi.string().min(3).required(),
})

export const postsValidateInfos: RequestHandler = (req, res, next) => {
  const { error } = PostSchema.validate(req.body)
  if (error) return res.status(400).json({ message: error.message })
  next()
}