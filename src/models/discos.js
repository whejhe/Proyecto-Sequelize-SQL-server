import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const discos = sequelize.define('discos',{
    id_discos:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    titulo_disco:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    anio_lanzamiento: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    id_artista:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'artistas',
            key:'id_artista'
        }
    }
});