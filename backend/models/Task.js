const { DataTypes } = require('sequelize')

const db = require('../db/conn')


const Task = db.define('Task',{
    title:{
        type: DataTypes.STRING,
        required: true,
    },
    description:{
        type: DataTypes.STRING,
        required: true,
    },
    duedate:{
        type: DataTypes.DATEONLY,
    },
    done:{
        type: DataTypes.BOOLEAN,
        required: false,
    },
    hide:{
        type: DataTypes.BOOLEAN,
        required: false,
    },
})

module.exports = Task