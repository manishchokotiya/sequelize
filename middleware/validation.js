const { user } = require("../valid/user");
const { product } = require("../valid/product");

module.exports = {
  adduser: async (req, res, next) => {
    const value = await user.validate(req.body);

    if (value.error) {
      res.json({
        success: false,
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },
  addproduct: async (req, res, next) => {
    const value = await product.validate(req.body);
    if (value.error) {
      res.json({ success: false, message: value.error.details[0].message });
    } else {
      next();
    }
  },
};
