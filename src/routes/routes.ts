import { Router } from "express";
import CotacaoController from "../controllers/CotacaoController";


const router = Router();

router.get('/:plan_type');
router.get('/:plan_type/:accomodation');
router.get('/:plan_type/:accomodation/:odonto');
router.get('/:plan_type/:accomodation/:odonto/:co_participation');


export default router