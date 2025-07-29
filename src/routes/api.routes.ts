import { Router } from "express";
import CotacaoController from "../controllers/CotacaoController";

const router = Router();

router.get('/', CotacaoController.index);
router.get('/:state', CotacaoController.one);
router.get('/:state/:city/', CotacaoController.two);
router.get('/:state/:city/:plan_type', CotacaoController.three);
router.get('/:state/:city/:plan_type/:accomodation', CotacaoController.four);
router.get('/:state/:city/:plan_type/:accomodation/:plan_group/:odonto', CotacaoController.five);
router.get('/:state/:city/:plan_type/:accomodation/:plan_group/:odonto/:coparticipation_modality', CotacaoController.six);

export default router