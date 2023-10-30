module.exports = (sequelize, Sequelize) => {
    const FeesSet = sequelize.define('FeesSet', {
      feesSetID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      feeType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      feesAmount: {
        type: Sequelize.DECIMAL(10, 2), 
      },
      maxDiscountAmount: {
        type: Sequelize.DECIMAL(10, 2),
      },
      feesDescription: {
        type: Sequelize.STRING,
      },
      feesStatus: {
        type: Sequelize.ENUM('Active', 'Expired', 'Disabled'),
      },
      sessionID: {
        type: Sequelize.INTEGER,
      },
      courseID: {
        type: Sequelize.INTEGER,
      },
      branchID: {
        type: Sequelize.INTEGER,
      },

    });
    return FeesSet;
  };
  