"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const espadaController_1 = require("../controllers/espadaController");
const router = (0, express_1.Router)();
router.get('/espadas', espadaController_1.getEspadas);
router.get('/espadas/:id', espadaController_1.getEspada);
router.post('/espadas', espadaController_1.createEspada);
router.put('/espadas/:id', espadaController_1.updateEspada);
router.delete('/espadas/:id', espadaController_1.deleteEspada);
exports.default = router;
//# sourceMappingURL=espadaRoute.js.map