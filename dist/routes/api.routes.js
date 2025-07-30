"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CotacaoController_1 = __importDefault(require("../controllers/CotacaoController"));
const router = (0, express_1.Router)();
router.get('/v2/search', CotacaoController_1.default.search);
router.get('/', CotacaoController_1.default.index);
router.get('/:state', CotacaoController_1.default.one);
router.get('/:state/:city/', CotacaoController_1.default.two);
router.get('/:state/:city/:plan_type', CotacaoController_1.default.three);
router.get('/:state/:city/:plan_type/:accomodation', CotacaoController_1.default.four);
router.get('/:state/:city/:plan_type/:accomodation/:plan_group/:odonto', CotacaoController_1.default.five);
router.get('/:state/:city/:plan_type/:accomodation/:plan_group/:odonto/:coparticipation_modality', CotacaoController_1.default.six);
exports.default = router;
