import { Request, Response } from "express";
import { FiveParams, OneParams, ThreeParams, ThreeResponse, TwoParams } from "../types/request";
import getJsonFromExcelTable from "../utils/get-json-from-excel-table";
import prisma from "../../config/prisma";

export default new class CotacaoController {
    async index(req: Request, res: Response<string[]>) {
        const citys = await prisma.quotation.findMany({ select: { cidade: true } });
        const arrayCitys = citys.map((item) => item.cidade).filter((city, index, array) => array.indexOf(city) === index);
        res.json(arrayCitys);
    }

    async one(req: Request<OneParams>, res: Response<string[]>) {
        const { city } = req.params;
        const planTypes = await prisma.quotation.findMany({ where: { cidade: city }, select: { tipo_plano: true } });
        const arrayPlanTypes = planTypes.map((item) => item.tipo_plano).filter((planType, index, array) => array.indexOf(planType) === index);
        res.json(arrayPlanTypes);
    }

    async two(req: Request<TwoParams>, res: Response<string[]>) {
        const { city, plan_type } = req.params;
        const accomodations = await prisma.quotation.findMany({ where: { cidade: city, tipo_plano: plan_type }, select: { acomodacao: true } });
        const arrayAccomodations = accomodations.map((item) => item.acomodacao).filter((accomodation, index, array) => array.indexOf(accomodation) === index);
        res.json(arrayAccomodations);
    }

    async three(req: Request<ThreeParams>, res: Response<ThreeResponse[]>) {
        const { city, plan_type, accomodation } = req.params;
        const planGroups = await prisma.quotation.findMany({ where: { cidade: city, tipo_plano: plan_type, acomodacao: accomodation }, select: { plano_grupo: true, assistencia_modalidade: true } });
        res.json(planGroups);
    }

    async five(req: Request<FiveParams>, res: Response) {
        const { city, plan_type, accomodation, plan_group, odonto } = req.params;
        const quotations = await prisma.quotation.findMany({ where: { 
            cidade: city, 
            tipo_plano: plan_type, 
            acomodacao: accomodation, 
            plano_grupo: plan_group, 
            assistencia_modalidade: odonto 
        }});
        res.json(quotations);
    }
}