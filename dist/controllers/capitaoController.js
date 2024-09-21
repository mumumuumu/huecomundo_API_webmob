"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCapitao = exports.updateCapitao = exports.createCapitao = exports.getCapitao = exports.getCapitaes = void 0;
const data_source_1 = require("../routes/data-source");
const Capit_es_1 = require("../entity/Capit\u00E3es");
const getCapitaes = async (req, res) => {
    try {
        const capitaoRepository = data_source_1.AppDataSource.getRepository(Capit_es_1.Capitão);
        const capitaes = await capitaoRepository.find();
        res.json(capitaes);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao buscar capitães', error });
    }
};
exports.getCapitaes = getCapitaes;
const getCapitao = async (req, res) => {
    try {
        const { id } = req.params;
        const capitaoRepository = data_source_1.AppDataSource.getRepository(Capit_es_1.Capitão);
        const capitao = await capitaoRepository.findOne({ where: { id_capitao: Number(id) } });
        if (!capitao) {
            res.status(404).json({ message: 'Capitão não encontrado' });
            return;
        }
        res.json(capitao);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao buscar capitão', error });
    }
};
exports.getCapitao = getCapitao;
const createCapitao = async (req, res) => {
    try {
        const capitaoRepository = data_source_1.AppDataSource.getRepository(Capit_es_1.Capitão);
        const novoCapitao = capitaoRepository.create(req.body);
        const result = await capitaoRepository.save(novoCapitao);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao criar capitão', error });
    }
};
exports.createCapitao = createCapitao;
const updateCapitao = async (req, res) => {
    try {
        const { id } = req.params;
        const capitaoRepository = data_source_1.AppDataSource.getRepository(Capit_es_1.Capitão);
        const capitaoExistente = await capitaoRepository.findOne({ where: { id_capitao: Number(id) } });
        if (!capitaoExistente) {
            res.status(404).json({ message: 'Capitão não encontrado' });
            return;
        }
        capitaoRepository.merge(capitaoExistente, req.body);
        const result = await capitaoRepository.save(capitaoExistente);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar capitão', error });
    }
};
exports.updateCapitao = updateCapitao;
const deleteCapitao = async (req, res) => {
    try {
        const { id } = req.params;
        const capitaoRepository = data_source_1.AppDataSource.getRepository(Capit_es_1.Capitão);
        const result = await capitaoRepository.delete(Number(id));
        if (result.affected === 0) {
            res.status(404).json({ message: 'Capitão não encontrado' });
            return;
        }
        res.status(200).json({ message: 'Capitão removido com sucesso' });
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao remover capitão', error });
    }
};
exports.deleteCapitao = deleteCapitao;
//# sourceMappingURL=capitaoController.js.map