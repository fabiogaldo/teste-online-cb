module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0,
    },
    proficiency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return User;
};
