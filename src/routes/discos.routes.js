import {Router} from 'express';
import {getDiscos,createDiscos, updateDiscos, deleteDiscos} from '../controllers/discos.controller.js'

const router = Router();

router.get('/discos',getDiscos);
router.post('/discos',createDiscos);
router.put('/discos/:id',updateDiscos);
router.delete('/discos/:id',deleteDiscos);
router.get('/discos/:id');

export default router;