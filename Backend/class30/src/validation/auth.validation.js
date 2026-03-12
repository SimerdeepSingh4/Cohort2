import { body, validationResult } from "express-validator"

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        next()
    }
    return res.status(400).json({
        errors: errors.array()
    })
}


export const registerValidation = [
    body("username").isString().withMessage("Username must be a string"),
    body("email").isEmail().withMessage("Email must be a valid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
    validate

]