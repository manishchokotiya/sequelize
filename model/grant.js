module.exports=(sequelize,DataTypes)=>{
const Grant = sequelize.define(
    "grant",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      selfGranted: DataTypes.BOOLEAN,
    },
    { timestamps: false }
  );
  return Grant
}  