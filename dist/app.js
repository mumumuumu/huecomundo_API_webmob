"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const espadaRoute_1 = __importDefault(require("./routes/espadaRoute"));
const capitaoRoute_1 = __importDefault(require("./routes/capitaoRoute"));
const healthcheckRout_1 = __importDefault(require("./routes/healthcheckRout"));
const data_source_1 = require("./routes/data-source");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
data_source_1.AppDataSource.initialize().then(() => {
    console.log('Conexão com o banco de dados inicializada');
}).catch(error => console.log('Erro ao inicializar o banco de dados:', error));
app.use('/webmob', espadaRoute_1.default);
app.use('/webmob', capitaoRoute_1.default);
app.use('/webmob', healthcheckRout_1.default);
//# sourceMappingURL=app.js.map