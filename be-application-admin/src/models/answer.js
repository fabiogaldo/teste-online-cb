module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: 0,
    },
  });

  Answer.associate = (models) => {
    Answer.belongsTo(models.Question, { foreignKey: 'questionId', foreignKeyConstraint: true });
  };

  return Answer;
};
