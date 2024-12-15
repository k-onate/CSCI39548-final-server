/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,  
    allowNull: false,
    unique: true, 
    validate: {
      isEmail: true 
    }
  },
  gpa: {
    type: Sequelize.DECIMAL(3, 2),
    allowNull: false,
  },

  campusId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  profilePhoto: {
    type: Sequelize.STRING,
    allowNull: true,
  },

});

// Export the student model
module.exports = Student;
 