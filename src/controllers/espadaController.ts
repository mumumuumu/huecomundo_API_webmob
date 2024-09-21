import { Request, Response } from 'express';
import { AppDataSource } from '../routes/data-source'; 
import { Espada } from '../entity/Espada';


export const getEspadas = async (req: Request, res: Response): Promise<void> => {
    try {
        const espadaRepository = AppDataSource.getRepository(Espada);
        const espadas = await espadaRepository.find();
        res.json(espadas);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar espadas', error });
    }
};


export const getEspada = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const espadaRepository = AppDataSource.getRepository(Espada);
        const espada = await espadaRepository.findOne({ where: { id_espada: Number(id) } });

        if (!espada) {
            res.status(404).json({ message: 'Espada não encontrada' });
            return;
        }

        res.json(espada);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar espada', error });
    }
};


export const createEspada = async (req: Request, res: Response): Promise<void> => {
    try {
        const espadaRepository = AppDataSource.getRepository(Espada);
        const novaEspada = espadaRepository.create(req.body);
        const result = await espadaRepository.save(novaEspada);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar espada', error });
    }
};


export const updateEspada = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const espadaRepository = AppDataSource.getRepository(Espada);
        const espadaExistente = await espadaRepository.findOne({ where: { id_espada: Number(id) } });

        if (!espadaExistente) {
            res.status(404).json({ message: 'Espada não encontrada' });
            return;
        }

        espadaRepository.merge(espadaExistente, req.body);
        const result = await espadaRepository.save(espadaExistente);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar espada', error });
    }
};


export const deleteEspada = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const espadaRepository = AppDataSource.getRepository(Espada);
        const result = await espadaRepository.delete(Number(id));

        if (result.affected === 0) {
            res.status(404).json({ message: 'Espada não encontrada' });
            return;
        }

        res.status(200).json({ message: 'Espada removida com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao remover espada', error });
    }
};
