import { Router } from 'express';
import { getEspadas, getEspada, createEspada, updateEspada, deleteEspada } from '../controllers/espadaController';

const router = Router();


router.get('/espadas', getEspadas);


router.get('/espadas/:id', getEspada);


router.post('/espadas', createEspada);


router.put('/espadas/:id', updateEspada);


router.delete('/espadas/:id', deleteEspada);

export default router;
