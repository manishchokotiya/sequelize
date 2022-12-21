// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("./index");

// const contact = sequelize.define(
//   "contact",
//   {
//     per_address: { type: DataTypes.STRING },
//     cur_address: { type: DataTypes.STRING },

//   },
//   { timestamps: false }
// );

// module.exports = contact;

module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define("contact", {
    per_address: { type: DataTypes.STRING },
    cur_address: { type: DataTypes.STRING },
    
  });
  return contact;
};
