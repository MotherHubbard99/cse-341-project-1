//const validator = require('../helpers/validate');

const saveContact = (req, res, next) => {
    const validationRule = {
        email: 'required|string',
        birthday: 'string',
        favorite_color: 'required|string',
        birthday: 'string',
        firstname: 'required|string',
        lastname: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
         }
  });
};

module.exports = {
    saveContact
};
