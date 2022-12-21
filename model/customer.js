module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define(
    "customer",
    {
      username: DataTypes.STRING,
      points: DataTypes.INTEGER,
    },
    { timestamps: false }
  );
  return customer;
};
