import { Router, Request, Response } from 'express';

const router = Router();

router.get('/healthcheck', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Sucesso' });
});

export default router;
