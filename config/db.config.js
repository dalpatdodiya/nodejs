const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
     process.env.DATABASE_URL,{
     dialect: "postgres",
     protocol: 'postgres',
     host: process.env.DB_HOST,
     dialectOptions: {
          ssl: true
     }
     timezone: "+05:30"
})

module.exports = sequelize;
