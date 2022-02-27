const { check, validationResult } = require("express-validator");


exports.RegisterRules =()=>[

    check("country", "this field is required").notEmpty(),
    check("dateStart", "this field is required").notEmpty(),
    check("dateEnd", "this field is required").notEmpty(),
    check("description", "this field is required").notEmpty(),
    
]

exports.validator = (req, res, next) => {
    const errors = validationResult(req);

    errors.isEmpty() ? next() : res.status(402).json({ errors: errors.array() });
};


 
 
