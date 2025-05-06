import { Router } from "express";
import CotacaoController from "../controllers/CotacaoController";

const router = Router();

router.get('/', CotacaoController.index);
router.get('/:city', CotacaoController.one);
router.get('/:city/:plan_type', CotacaoController.two);
router.get('/:city/:plan_type/:accomodation', CotacaoController.three);
router.get('/:city/:plan_type/:accomodation/:segmentation', CotacaoController.four);
router.get('/:city/:plan_type/:accomodation/:segmentation/:plan_group', CotacaoController.five);
router.get('/:city/:plan_type/:accomodation/:segmentation/:plan_group/:odonto', CotacaoController.six);

export default router