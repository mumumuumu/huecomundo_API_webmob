"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const capitaoController_1 = require("../controllers/capitaoController");
const router = (0, express_1.Router)();
router.get('/capitaes', capitaoController_1.getCapitaes);
router.get('/capitaes/:id', capitaoController_1.getCapitao);
router.post('/capitaes', capitaoController_1.createCapitao);
router.put('/capitaes/:id', capitaoController_1.updateCapitao);
router.delete('/capitaes/:id', capitaoController_1.deleteCapitao);
exports.default = router;
//# sourceMappingURL=capitaoRoute.js.map