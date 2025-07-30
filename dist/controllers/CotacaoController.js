"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../config/prisma"));
const format_quotaton_1 = __importDefault(require("../utils/format-quotaton"));
exports.default = new class CotacaoController {
    search(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchQuotation = yield prisma_1.default.quotation.findMany({
                where: req.query,
            });
            res.json((0, format_quotaton_1.default)(searchQuotation));
        });
    }
    ;
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const states = yield prisma_1.default.quotation.findMany({ select: { estado: true } });
            const arrayStates = states.map((item) => item.estado).filter((state, index, array) => array.indexOf(state) === index);
            res.json(arrayStates.sort());
        });
    }
    one(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { state } = req.params;
            const cities = yield prisma_1.default.quotation.findMany({ where: { estado: state }, select: { cidade: true } });
            const arrayCities = cities.map((item) => item.cidade).filter((city, index, array) => array.indexOf(city) === index);
            res.json(arrayCities.sort());
        });
    }
    two(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { city, state } = req.params;
            const planTypes = yield prisma_1.default.quotation.findMany({ where: { cidade: city, estado: state }, select: { tipo_plano: true } });
            const arrayPlanTypes = planTypes.map((item) => item.tipo_plano).filter((plan_type, index, array) => array.indexOf(plan_type) === index);
            res.json(arrayPlanTypes.sort().reverse());
        });
    }
    three(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { city, plan_type, state } = req.params;
            const accomodations = yield prisma_1.default.quotation.findMany({ where: { cidade: city, tipo_plano: plan_type, estado: state }, select: { acomodacao: true } });
            const arrayAccomodations = accomodations.map((item) => item.acomodacao).filter((accomodation, index, array) => array.indexOf(accomodation) === index);
            const sortAccomodation = (valor) => {
                if (valor === "AMBULATORIAL")
                    return 0;
                if (valor === "ENFERMARIA")
                    return 1;
                return 2;
            };
            res.json(arrayAccomodations.sort((a, b) => {
                const pA = sortAccomodation(a);
                const pB = sortAccomodation(b);
                if (pA !== pB)
                    return pA - pB;
                return a.localeCompare(b);
            }));
        });
    }
    four(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { city, state, plan_type, accomodation } = req.params;
            try {
                const quotations = (yield prisma_1.default.quotation.findMany({ where: {
                        cidade: city,
                        estado: state,
                        tipo_plano: plan_type,
                        acomodacao: accomodation
                    }, select: { plano_grupo: true, assistencia_modalidade: true } }))
                    .filter((item, index, array) => array.findIndex((obj) => obj.plano_grupo === item.plano_grupo && obj.assistencia_modalidade === item.assistencia_modalidade) === index);
                res.json(quotations);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    five(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { city, state, plan_type, accomodation, plan_group, odonto } = req.params;
            try {
                const quotations = yield prisma_1.default.quotation.findMany({
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
                    if ((a.coparticipacao_tipo.toUpperCase().includes("SEM") || a.coparticipacao_tipo.includes("PARCIAL"))
                        && (!b.coparticipacao_tipo.includes("SEM") && !b.coparticipacao_tipo.includes("PARCIAL")))
                        return -1;
                    if ((!a.coparticipacao_tipo.toUpperCase().includes("SEM") || !a.coparticipacao_tipo.toUpperCase().includes("PARCIAL")) ||
                        (b.coparticipacao_tipo.toUpperCase().includes("SEM") || b.coparticipacao_tipo.toUpperCase().includes("PARCIAL")))
                        return 1;
                    return 0;
                });
                res.json((0, format_quotaton_1.default)(quotationOrdened));
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    six(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { city, state, plan_type, accomodation, plan_group, odonto, coparticipation_modality } = req.params;
            try {
                const quotations = yield prisma_1.default.quotation.findMany({
                    where: {
                        estado: state,
                        cidade: city,
                        tipo_plano: plan_type,
                        acomodacao: accomodation,
                        plano_grupo: plan_group,
                        assistencia_modalidade: odonto,
                        coparticipacao_tipo: coparticipation_modality
                    }
                });
                res.json((0, format_quotaton_1.default)(quotations));
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
