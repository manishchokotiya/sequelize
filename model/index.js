const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  process.env.database,
  process.env.user,
  process.env.password,
  {
    host: process.env.host,
    dialect: process.env.dialect,
    pool: { max: 5, min: 0, idel: 10000 },
  }
);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Product =require('./product')(sequelize,Sequelize)
db.Grant = require("./grant")(sequelize, Sequelize);
db.users = require("./users")(sequelize, Sequelize);
db.contact = require("./contact")(sequelize, Sequelize);
db.education = require("./education")(sequelize, Sequelize);
db.customer = require("./customer")(sequelize, Sequelize);
db.Profile = require("./profile")(sequelize, Sequelize);
db.Usercontact = require("./user_contacts")(
  sequelize,
  Sequelize,
  db.users,
  db.contact
);

db.Player = sequelize.define("Player", { username: DataTypes.STRING });
db.Team = sequelize.define("Team", { name: DataTypes.STRING });
db.Game = sequelize.define("Game", { name: DataTypes.STRING });
db.gameTeam = sequelize.define("Gameteam", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },
});

// db.users.hasMany(db.contact);
// db.contactUser = db.contact.belongsTo(db.users, {
//   foreignKey: "userId",
//   as: "users",
// });
// db.users.hasMany(db.education);
// db.education.belongsTo(db.users);
// db.users.belongsToMany(db.contact, { through: db.Usercontact });
// db.contact.belongsToMany(db.users, { through: db.Usercontact });

// db.customer.belongsToMany(db.Profile, {
//   through: db.Grant,
//   uniqueKey: "my_custom_unique",
// });
// db.Profile.belongsToMany(db.customer, {
//   through: db.Grant,
//   uniqueKey: "my_custom_unique",
// });

// // db.Profile.hasMany(db.Grant);
// // db.Grant.belongsTo(db.Profile);
// // db.customer.hasMany(db.Grant);
// // db.Grant.belongsTo(db.customer);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected ");
  })
  .catch((err) => {
    console.log("Error" + err);
  });
sequelize.sync({ force: false }).then(() => {
  console.log("yes are sync ");
});
module.exports = db;
