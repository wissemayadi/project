const { check, validationResult } = require("express-validator");

exports.registerRules = () => [

    check("pseudo", " (*)pseudo field is required").notEmpty(),
    check("email", " (*)email field is required").notEmpty(),
    check("email", "(*)email form must be respected").isEmail(),
  
    check("password", "please enter  a valid password").isLength({ min: 4 })
]

exports.loginRules = () => [
    check('email', 'email is required').notEmpty(),
    check('email', 'this email is not valid').isEmail(),
    check('passWord', 'password required').notEmpty()
];

exports.validator = (req, res, next) => {
    const errors = validationResult(req);

    errors.isEmpty() ? next() : res.status(402).json({ errors: errors.array() });
};



// exports.validator = (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).send({
//         errors: errors.array().map((el) => ({
//           msg: el.msg,
//         })),
//       });
//     }
//     next();
//   };
// exports.PostRules =()=>[

//     check("country", "this field is required").notEmpty(),
//     check("dateStart", "this field is required").notEmpty(),
//     check("dateEnd", "this field is required").notEmpty(),
//     check("description", "this field is required").notEmpty(),
    
// ]
    

