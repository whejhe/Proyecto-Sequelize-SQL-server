import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const discosUsuario = sequelize.define('discosUsuario',{
    usuarioID:{
        type: DataTypes.INTEGER,
        references:{model:'usuarios',key:'usuarioID'},
        primaryKey: true
    },
    id_disco:{
        type: DataTypes.INTEGER,
        references:{model:'discos',key:'id_discos'},
        primaryKey: true
    },
},{
    timestamps:false,
    index:[{
        unique:true,
        fields:['usuarioID','id_disco']
    }]
});