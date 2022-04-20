import { ErrorRequestHandler } from 'express';
import Joi from 'joi';

export const handleGenericError: ErrorRequestHandler = (error, _req, res, _next) => {
  console.log(error);
 /*  if(error.message)return res.status(400).json({message:error}) */
 if(Joi.isError(error))return res.status(400).json({message:error})
  return res.status(500).json({message:'internal error'})

}