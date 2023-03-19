import {Router} from 'express';
import {deleteDiscosUsuario, getDiscosUsuario} from '../controllers/discosUsuario.controller.js'

const router = Router();

router.get('/discosUsuario',getDiscosUsuario);
router.post('/discosUsuario');
router.put('/discosUsuario/:id');
router.delete('/discosUsuario/:id',deleteDiscosUsuario);
router.get('/discosUsuario/:id');

export default router;