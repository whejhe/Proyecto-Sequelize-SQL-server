import Sequelize from 'sequelize';

export const sequelize = new Sequelize('musicaDB','root','1234',{
    host: 'localhost',
    dialect: 'mssql'
});