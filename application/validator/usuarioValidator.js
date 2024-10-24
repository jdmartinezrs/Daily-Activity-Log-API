const { body, query, param } = require("express-validator");
//const { ObjectId } = require("mongodb");

class UserValidator {

    postNewUserValidator = () => {
        return [
            body('nombre_usuario').notEmpty().isString().withMessage('The name is mandatory'),
            body('email').notEmpty().isEmail().withMessage('Send the email'),
            body('contrasena_hash').notEmpty().isString().withMessage('Send the contrasena_hash'),
            query().custom((value, { req }) => {
                if (Object.keys(req.query).length > 0) {
                    throw new Error('No envíes parámetros en la URL');
                }
                return true;
            })
        ]
    }

    validateUserDataEmpty = () => {
        return [
            body().custom((value, { req }) => {
                if (Object.keys(req.body).length > 0) {
                    throw new Error('Do not send anything in the body');
                }
                return true;
            }),
            query().custom((value, { req }) => {
                if (Object.keys(req.query).length > 0) {
                    throw new Error(`Don't send anything in the url`);
                }
                return true;
            })
        ];
    };

}
module.exports = UserValidator;

