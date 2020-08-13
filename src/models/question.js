module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Question.associate = (models) => {
    Question.hasMany(models.Answer, { foreignKey: 'questionId' });
  };

  return Question;
};
