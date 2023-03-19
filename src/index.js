import app from './app.js';
import {sequelize} from './database/database.js'

async function main(){
    app.listen(3000);
    console.log('Server is listening on port', 3000)
}

main();