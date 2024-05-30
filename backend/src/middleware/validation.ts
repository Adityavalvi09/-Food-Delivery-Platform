import {Request,Response, NextFunction } from "express";
import { body } from "express-validator";


const handleValidationErrors = async(req:Request, res:Response , next:NextFunction)=>{

}
export const validateMyUserRequest = [
    body ("name").isString().notEmpty().withMessage("Name must be a string"),
    body ("address")
    .isString()
    .notEmpty()
    .withMessage("Address Must be string"),
body("city").isString().notEmpty().withMessage("city must be string"),
body("country").isString().notEmpty().withMessage("Country must be string"),

];