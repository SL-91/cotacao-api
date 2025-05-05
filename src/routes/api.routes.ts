import { Router } from "express";
import CotacaoController from "../controllers/CotacaoController";


const router = Router();

router.get('/:plan_type', CotacaoController.one);

export default router