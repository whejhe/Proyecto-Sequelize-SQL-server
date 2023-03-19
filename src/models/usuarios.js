import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const usuarios = sequelize.define('usuarios',{
    usuarioID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nombreUsuario:{
        type: DataTypes.STRING,
        allowNull:false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING
    },
    fechaNacimiento:{
        type: DataTypes.DATE
    },
    contraseña:{
        type: DataTypes.STRING,
        allowNull: false
    },

});