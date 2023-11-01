// class.model.js

module.exports = (sequelize, Sequelize) => {
    const Class = sequelize.define('Class', {
      classID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      className: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      startDate: {
        type: Sequelize.DATE,
      },
      endDate: {
        type: Sequelize.DATE,
      },
      maximumCapacity: {
        type: Sequelize.INTEGER,
      },
      currentEnrollment: {
        type: Sequelize.INTEGER,
      },
      classStatus: {
        type: Sequelize.ENUM('Active', 'Inactive', 'Upcoming'),
      },
      description: {
        type: Sequelize.STRING,
      },
      sessionID: {
        type: Sequelize.INTEGER,
      },
      branchID: {
        type: Sequelize.INTEGER,
      },
    });
  
    // Define associations if needed (e.g., Class belongs to Session and Branch)
    Class.belongsTo(sequelize.models.Session, { foreignKey: 'sessionID' });
    Class.belongsTo(sequelize.models.Branch, { foreignKey: 'branchID' });
  
    return Class;
  };
  