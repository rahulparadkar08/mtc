module.exports = (sequelize, Sequelize) => {
    const Batch = sequelize.define('Batch', {
      batchID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      batchName: {
        type: Sequelize.STRING,
      },
      startDate: {
        type: Sequelize.DATE,
      },
      endDate: {
        type: Sequelize.DATE,
      },
      classID: {
        type: Sequelize.INTEGER,
      },
      courseID: {
        type: Sequelize.INTEGER,
      },
    });
  
    // Define associations if needed (e.g., Batch belongs to Class and Course)
    Batch.belongsTo(sequelize.models.Class, { foreignKey: 'classID' });
    Batch.belongsTo(sequelize.models.Course, { foreignKey: 'courseID' });
  
    return Batch;
  };
  