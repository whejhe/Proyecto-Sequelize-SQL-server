import app from './app.js';
import { sequelize } from './database/database.js';


// import './models/artistas.js';
// import './models/discos.js';
// import './models/usuarios.js';
// import './models/discosUsuario.js';

async function main() {
    try {
        await sequelize.sync({force:false});//force:false "Para dejar de crear las tablas a cada reinicio"
        await sequelize.authenticate();
        console.log("Connection has been established successfully");
        app.listen(3000);
        console.log('Server is listening on port', 3000);
    } catch (error) {
        console.error("Unable to connect to the database:",error);
    }
}

main();