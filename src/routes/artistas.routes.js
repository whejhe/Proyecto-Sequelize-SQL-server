import {Router} from 'express';
import {getArtista,createArtista, updateArtista, deleteArtista} from '../controllers/artistas.controller.js'

const router = Router();

router.get('/artistas',getArtista);
router.post('/artistas',createArtista);
router.put('/artistas/:id',updateArtista);
router.delete('/artistas/:id',deleteArtista);
router.get('/artistas/:id');

export default router;