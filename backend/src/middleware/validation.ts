import { error } from "console";
import {Request,Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";


const handleValidationErrors = async(req:Request, res:Response , next:NextFunction)=>{
      const errors = validationResult(req);
      if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()})
      }
      next();
}
export const validateMyUserRequest = [
    body ("name").isString().notEmpty().withMessage("Name must be a string"),
    body ("address")
    .isString()
    .notEmpty()
    .withMessage("Address Must be string"),
body("city").isString().notEmpty().withMessage("city must be string"),
body("country").isString().notEmpty().withMessage("Country must be string"),
handleValidationErrors,
];