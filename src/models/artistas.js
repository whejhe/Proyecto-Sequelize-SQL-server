import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const artistas = sequelize.define('artistas',{
    id_artista:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nombre_artista:{
        type: DataTypes.STRING,
    }
});