module.exports = (sequelize, Sequelize) => {
  const Session = sequelize.define('Session', {
    sessionID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Auto-generate unique session IDs
    },
    sessionName: {
      type: Sequelize.STRING,
    },
    startDate: {
      type: Sequelize.DATE,
    },
    endDate: {
      type: Sequelize.DATE,
    },
    sessionStatus: {
      type: Sequelize.ENUM('Active', 'Inactive', 'Upcoming'),
    },
    branchID: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Branches', // Reference the Branch model
        key: 'branchID',
      },
    },
    sessionCapacity: {
      type: Sequelize.INTEGER,
    },
  });

  return Session;
};
  