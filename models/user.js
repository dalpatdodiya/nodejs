const Sequelize = require('sequelize');
const sequelize = require('../config/db.config')

const User = sequelize.define('user', {
        email: {
            type: Sequelize.STRING,
            allowNull : false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull : false,   
        },
        name: {
            type: Sequelize.STRING,
            allowNull : false,
        },
        status: {
            type: Sequelize.STRING,
            defaultValue: 'I am New',
        }
    },
    {
        timestamps: true,
        paranoid: true
    
    }); 

module.exports = User;

//sequelize.sync().then().catch(err => console.log("Sync Error :",err));
//module.exports = User;