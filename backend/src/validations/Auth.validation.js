const { body } = require("express-validator");

class AuthValidation {
  static RegisterUser = [
    // body("token").notEmpty().withMessage("token is Required"),  <-- Remove or comment this line
    body("name").notEmpty().withMessage("name cannot be empty"),
    body("email").isEmail().withMessage("email must be valid").notEmpty().withMessage("email is required"),
    body("password").isLength({ min: 6 }).withMessage("password must include at least 6 characters").notEmpty().withMessage("password is required")
  ];

  static LoginUser = [
    // body("token").notEmpty().withMessage("token is Required"),  <-- Remove or comment this line
    body("email").isEmail().withMessage("email must be valid").notEmpty().withMessage("email is required"),
    body("password").isLength({ min: 6 }).withMessage("password must include at least 6 characters").notEmpty().withMessage("password is required")
  ];
}

module.exports = AuthValidation;
