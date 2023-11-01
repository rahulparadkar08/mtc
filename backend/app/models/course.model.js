module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define('Course', {
      courseID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      courseName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      courseDuration: {
        type: Sequelize.STRING,
      },
      subjects: {
        type: Sequelize.JSON, // Store subjects as a JSON array
      },
      description: {
        type: Sequelize.STRING,
      },
      courseStatus: {
        type: Sequelize.ENUM('Active', 'Inactive', 'Upcoming'),
      },
      termsAndConditions: {
        type: Sequelize.TEXT,
      },
      sessionID: {
        type: Sequelize.INTEGER,
      },
      branchID: {
        type: Sequelize.INTEGER,
      },
    });
  
    // Define associations if needed (e.g., Course belongs to Session and Branch)
    Course.belongsTo(sequelize.models.Session, { foreignKey: 'sessionID' });
    Course.belongsTo(sequelize.models.Branch, { foreignKey: 'branchID' });
  
    return Course;
  };
  