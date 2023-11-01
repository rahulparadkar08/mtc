const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

// Import individual model definitions
const BranchModel = require('./branch.model.js');
const SessionModel = require('./session.model.js');
const FeesSetModel = require('./feesSet.model.js');
const ClassModel = require('./class.model.js');
const CourseModel = require('./course.model.js');
const BatchModel = require('./batch.model.js');

// Initialize the models and their associations
const models = {
  Branch: BranchModel(sequelize, Sequelize),
  Session: SessionModel(sequelize, Sequelize),
  FeesSet: FeesSetModel(sequelize, Sequelize),
  Class: ClassModel(sequelize, Sequelize),
  Course: CourseModel(sequelize, Sequelize),
  Batch: BatchModel(sequelize, Sequelize),


};

// Define associations
//branch
models.Branch.hasMany(models.Session, { foreignKey: 'branchID' });
models.Session.belongsTo(models.Branch, { foreignKey: 'branchID' });

//feesSet
// models.FeesSet.belongsTo(models.Session, { foreignKey: 'sessionID' });
// models.Branch.hasMany(models.FeesSet, { foreignKey: 'branchID' });


module.exports = {
  ...models,
  sequelize,
};