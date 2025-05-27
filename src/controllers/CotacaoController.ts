import { Request, Response } from "express";
import { FiveParams, FourParams, FourResponse, OneParams, ThreeParams, TwoParams } from "../types/request";
import prisma from "../../config/prisma";
import formatQuotation from "../utils/format-quotaton";

export default new class CotacaoController {
    async index(req: Request, res: Response<string[]>) {
        const states = await prisma.quotation.findMany({ select: { estado: true } });
        const arrayStates = states.map((item) => item.estado).filter((state, index, array) => array.indexOf(state) === index);
        res.json(arrayStates.sort());
    }

    async one(req: Request<OneParams>, res: Response<string[]>) {
        const { state } = req.params;
        const cities = await prisma.quotation.findMany({ where: { estado: state }, select: { cidade: true } });
        const arrayCities = cities.map((item) => item.cidade).filter((city, index, array) => array.indexOf(city) === index);
        res.json(arrayCities.sort());
    }

    async two(req: Request<TwoParams>, res: Response<string[]>) {
        const { city, state } = req.params;
        const planTypes = await prisma.quotation.findMany({ where: { cidade: city, estado: state }, select: { tipo_plano: true } });
        const arrayPlanTypes = planTypes.map((item) => item.tipo_plano).filter((plan_type, index, array) => array.indexOf(plan_type) === index);
        res.json(arrayPlanTypes.sort());
    }

    async three(req: Request<ThreeParams>, res: Response<string[]>) {
        const { city, plan_type, state } = req.params;
        const accomodations = await prisma.quotation.findMany({ where: { cidade: city, tipo_plano: plan_type, estado: state }, select: { acomodacao: true } })
        const arrayAccomodations = accomodations.map((item) => item.acomodacao).filter((accomodation, index, array) => array.indexOf(accomodation) === index);
        
        const sortAccomodation = (valor: string): number => {
            if (valor === "AMBULATORIAL") return 0;
            if (valor === "ENFERMARIA") return 1;
            return 2;
        };
        res.json(arrayAccomodations.sort((a, b) => {
            const pA = sortAccomodation(a);
            const pB = sortAccomodation(b);

            if (pA !== pB) return pA - pB;
            return a.localeCompare(b);
        }));
    }

    async four(req: Request<FourParams>, res: Response<FourResponse[]>) {
        const { city, state, plan_type, accomodation } = req.params;
        try {
            const quotations = (await prisma.quotation.findMany({ where: { 
                cidade: city,
                estado: state,
                tipo_plano: plan_type, 
                acomodacao: accomodation
            }, select: { plano_grupo: true, assistencia_modalidade: true } }))
            .filter((item, index, array) => array.findIndex((obj) => obj.plano_grupo === item.plano_grupo && obj.assistencia_modalidade === item.assistencia_modalidade) === index);
            
            res.json(quotations);
        } catch (error) {
            console.log(error);   
        }
    }

    async five(req: Request<FiveParams>, res: Response) {
        const { city, state, plan_type, accomodation, plan_group, odonto } = req.params;        
        try {
            const quotations = await prisma.quotation.findMany({ 
                where: { 
                    estado: state,
                    cidade: city, 
                    tipo_plano: plan_type, 
                    acomodacao: accomodation, 
                    plano_grupo: plan_group, 
                    assistencia_modalidade: odonto 
                }
            });
            
            const quotationOrdened = quotations.sort((a, b) => {
                
                if((a.coparticipacao_tipo.toUpperCase().includes("SEM") || a.coparticipacao_tipo.includes("PARCIAL")) 
                    && (!b.coparticipacao_tipo.includes("SEM") && !b.coparticipacao_tipo.includes("PARCIAL"))) return -1;

                if((!a.coparticipacao_tipo.toUpperCase().includes("SEM") || !a.coparticipacao_tipo.toUpperCase().includes("PARCIAL")) ||
                    (b.coparticipacao_tipo.toUpperCase().includes("SEM") || b.coparticipacao_tipo.toUpperCase().includes("PARCIAL"))) return 1;

                return 0;
            });
            
            res.json(formatQuotation(quotationOrdened));
        } catch (error) {
            console.log(error);   
        }
    }
}