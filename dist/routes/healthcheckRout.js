"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/healthcheck', (req, res) => {
    res.status(200).json({ message: 'Sucesso' });
});
exports.default = router;
//# sourceMappingURL=healthcheckRout.js.map