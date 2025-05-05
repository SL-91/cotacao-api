import { Router } from "express";
import CotacaoController from "../controllers/CotacaoController";


const router = Router();

router.get('/:city', CotacaoController.one);
router.get('/:city/:plan_type', CotacaoController.two);
router.get('/:city/:plan_type/:accomodation', CotacaoController.three);
router.get('/:city/:plan_type/:accomodation/:plan_group', CotacaoController.four);

export default router