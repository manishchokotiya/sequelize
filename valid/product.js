const joi = require("joi");

const schema = {
  product: joi.object({
    Productname: joi.string().required(),
    ProductPrice: joi.string().required(),
    quantity: joi.string().required(),
  }),
};
// return schema;
module.exports = schema;
