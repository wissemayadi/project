const { check, validationResult } = require("express-validator");

exports.registerRules = () => [

    check("pseudo", "this field is required").notEmpty(),
    check("email", "this field is required").notEmpty(),
    check("email", "this field is required").isEmail(),
  
    check("password", "this is not a valid password").isLength({ min: 4 })
]

exports.validator = (req, res, next) => {
    const errors = validationResult(req);

    errors.isEmpty() ? next() : res.status(402).json({ errors: errors.array() });
};

// exports.PostRules =()=>[

//     check("country", "this field is required").notEmpty(),
//     check("dateStart", "this field is required").notEmpty(),
//     check("dateEnd", "this field is required").notEmpty(),
//     check("description", "this field is required").notEmpty(),
    
// ]
    

