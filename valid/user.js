const joi = require("joi");

const schema = {
  user: joi.object({
    name: joi.string().required(),
    lname: joi.string().required(),
    password: joi.string().required().max(5),
    gender: joi.string().valid("male", "female", "other").required(),
    email: joi.string().email().required(),
  }),
};
// return schema;
module.exports = schema;
