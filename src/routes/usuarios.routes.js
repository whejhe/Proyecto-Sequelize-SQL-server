import {Router} from 'express';
import {getUsuario,createUsuario, updateUsuarios, deleteUsuarios} from '../controllers/usuarios.controller.js'

const router = Router();

router.get('/usuarios',getUsuario);
router.post('/usuarios',createUsuario);
router.put('/usuarios/:id',updateUsuarios);
router.delete('/usuarios/:id',deleteUsuarios);
router.get('/usuarios/:id');

export default router;