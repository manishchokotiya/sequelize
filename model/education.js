module.exports = (sequelize, DataTypes) => {
  const education = sequelize.define("education", {
    class_name: { type: DataTypes.STRING },
    grade: { type: DataTypes.STRING },
    pass_year: { type: DataTypes.STRING },
  });
  return education;
};
