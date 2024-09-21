import { Router } from 'express';
import { getCapitaes, getCapitao, createCapitao, updateCapitao, deleteCapitao } from '../controllers/capitaoController';

const router = Router();


router.get('/capitaes', getCapitaes);


router.get('/capitaes/:id', getCapitao);


router.post('/capitaes', createCapitao);


router.put('/capitaes/:id', updateCapitao);


router.delete('/capitaes/:id', deleteCapitao);

export default router;
