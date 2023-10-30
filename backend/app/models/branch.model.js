module.exports =(sequelize,Sequelize ) =>{

    const Branch = sequelize.define('Branch', {
        branchID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true, // Auto-generate unique IDs
        },
        branchName: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true, // Ensure unique branch names
        },
        location: {
          type: Sequelize.STRING,
        },
        phoneNumber: {
          type: Sequelize.STRING,
        },
        emailAddresses: {
          type: Sequelize.STRING,
        },
        branchType: {
          type: Sequelize.STRING,
        },
        openingDate: {
          type: Sequelize.DATE,
        },
        branchStatus: {
          type: Sequelize.ENUM('active', 'closed', 'renovation'),
        },
        totalStudents: {
          type: Sequelize.INTEGER,
        },
        totalEmployees: {
          type: Sequelize.INTEGER,
        },
        branchAdministrator: {
          type: Sequelize.STRING,
        },
        sessionSchedule: {
          type: Sequelize.TEXT, // You can store schedules as text or in a separate table
        },
        coursesOffered: {
          type: Sequelize.TEXT, // You can store courses as text or in a separate table
        },
        facilities: {
          type: Sequelize.JSON, // Store facilities as JSON data
        },
      });

    return Branch
    }
      
