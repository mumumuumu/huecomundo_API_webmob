"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEspada = exports.updateEspada = exports.createEspada = exports.getEspada = exports.getEspadas = void 0;
const data_source_1 = require("../routes/data-source"); // Certifique-se de configurar o DataSource corretamente
const Espada_1 = require("../entity/Espada");
// Função para listar todas as espadas (GET)
const getEspadas = async (req, res) => {
    try {
        const espadaRepository = data_source_1.AppDataSource.getRepository(Espada_1.Espada);
        const espadas = await espadaRepository.find();
        res.json(espadas);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao buscar espadas', error });
    }
};
exports.getEspadas = getEspadas;
// Função para buscar uma espada por ID (GET)
const getEspada = async (req, res) => {
    try {
        const { id } = req.params;
        const espadaRepository = data_source_1.AppDataSource.getRepository(Espada_1.Espada);
        const espada = await espadaRepository.findOne({ where: { id_espada: Number(id) } });
        if (!espada) {
            res.status(404).json({ message: 'Espada não encontrada' });
            return;
        }
        res.json(espada);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao buscar espada', error });
    }
};
exports.getEspada = getEspada;
// Função para adicionar uma nova espada (POST)
const createEspada = async (req, res) => {
    try {
        const espadaRepository = data_source_1.AppDataSource.getRepository(Espada_1.Espada);
        const novaEspada = espadaRepository.create(req.body);
        const result = await espadaRepository.save(novaEspada);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao criar espada', error });
    }
};
exports.createEspada = createEspada;
// Função para atualizar uma espada existente (PUT)
const updateEspada = async (req, res) => {
    try {
        const { id } = req.params;
        const espadaRepository = data_source_1.AppDataSource.getRepository(Espada_1.Espada);
        const espadaExistente = await espadaRepository.findOne({ where: { id_espada: Number(id) } });
        if (!espadaExistente) {
            res.status(404).json({ message: 'Espada não encontrada' });
            return;
        }
        espadaRepository.merge(espadaExistente, req.body);
        const result = await espadaRepository.save(espadaExistente);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar espada', error });
    }
};
exports.updateEspada = updateEspada;
// Função para deletar uma espada (DELETE)
const deleteEspada = async (req, res) => {
    try {
        const { id } = req.params;
        const espadaRepository = data_source_1.AppDataSource.getRepository(Espada_1.Espada);
        const result = await espadaRepository.delete(Number(id));
        if (result.affected === 0) {
            res.status(404).json({ message: 'Espada não encontrada' });
            return;
        }
        res.status(200).json({ message: 'Espada removida com sucesso' });
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao remover espada', error });
    }
};
exports.deleteEspada = deleteEspada;
//# sourceMappingURL=espadaController.js.map