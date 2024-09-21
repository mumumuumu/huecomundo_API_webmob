"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const Espada_1 = require("../entity/Espada"); // Importando a entidade Espada
const Capit_es_1 = require("../entity/Capit\u00E3es"); // Importando a entidade Capitão
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Espada_1.Espada, Capit_es_1.Capitão],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map