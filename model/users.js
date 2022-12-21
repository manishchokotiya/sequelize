module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      name: {
        type: DataTypes.STRING,
        get() {
          const rawValue = this.getDataValue("name");
          return rawValue ? "Mr." + rawValue.toUpperCase() : null;
        },
      },
      lname: {
        type: DataTypes.STRING,

        set(value) {
          this.setDataValue("lname", value + ",indian");
        },
      },
      gender: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      fullName: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.name} ${this.lname}`;
        },
        set(value) {
          throw new Error("Do not try to set the `fullName` Value!");
        },
      },
    },
    { paranoid: true, deletedAt: "soft_deleted" }
  );
  return User;
};
