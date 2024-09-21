import { Request, Response } from 'express';
import { AppDataSource } from '../routes/data-source';
import { Capitão } from '../entity/Capitães';


export const getCapitaes = async (req: Request, res: Response): Promise<void> => {
    try {
        const capitaoRepository = AppDataSource.getRepository(Capitão);
        const capitaes = await capitaoRepository.find();
        res.json(capitaes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar capitães', error });
    }
};


export const getCapitao = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const capitaoRepository = AppDataSource.getRepository(Capitão);
        const capitao = await capitaoRepository.findOne({ where: { id_capitao: Number(id) } });

        if (!capitao) {
            res.status(404).json({ message: 'Capitão não encontrado' });
            return;
        }

        res.json(capitao);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar capitão', error });
    }
};


export const createCapitao = async (req: Request, res: Response): Promise<void> => {
    try {
        const capitaoRepository = AppDataSource.getRepository(Capitão);
        const novoCapitao = capitaoRepository.create(req.body);
        const result = await capitaoRepository.save(novoCapitao);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar capitão', error });
    }
};


export const updateCapitao = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const capitaoRepository = AppDataSource.getRepository(Capitão);
        const capitaoExistente = await capitaoRepository.findOne({ where: { id_capitao: Number(id) } });

        if (!capitaoExistente) {
            res.status(404).json({ message: 'Capitão não encontrado' });
            return;
        }

        capitaoRepository.merge(capitaoExistente, req.body);
        const result = await capitaoRepository.save(capitaoExistente);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar capitão', error });
    }
};


export const deleteCapitao = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const capitaoRepository = AppDataSource.getRepository(Capitão);
        const result = await capitaoRepository.delete(Number(id));

        if (result.affected === 0) {
            res.status(404).json({ message: 'Capitão não encontrado' });
            return;
        }

        res.status(200).json({ message: 'Capitão removido com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao remover capitão', error });
    }
};
