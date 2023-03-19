import express from 'express';
import usuariosRoutes from './routes/usuarios.routes.js';
import artistasRoutes from './routes/artistas.routes.js';
import discosRoutes from './routes/discos.routes.js';
import discosUsuarioRoutes from './routes/discosUsuario.routes.js';

const app = express();

//middlewares
app.use(express.json());

app.use(usuariosRoutes);
app.use(artistasRoutes);
app.use(discosRoutes);
app.use(discosUsuarioRoutes);

export default app;