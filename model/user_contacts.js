module.exports = (sequelize, DataTypes, User, Contact) => {
  const UserContract = sequelize.define("user_contacts", {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    contactId: {
      type: DataTypes.INTEGER,
      references: { model: Contact, key: "id" },
    },
  });
  return UserContract;
};
