import { Request, Response } from "express";
import { FourParams, OneParams, ThreeParams, TwoParams } from "../types/request";
import { SearchExcelResponse } from "../types/response";
import getJsonFromExcelTable from "../utils/get-json-from-excel-table";

export default new class CotacaoController {

    one(req: Request<OneParams>, res: Response<SearchExcelResponse[]>) {
        const jsonTable = getJsonFromExcelTable().filter((item) => item.cidade === req.params.city);
        res.status(200).json(jsonTable);
    }

    two(req: Request<TwoParams>, res: Response<SearchExcelResponse[]>) {
        const jsonTable = getJsonFromExcelTable()
        .filter((item) => 
            item.cidade === req.params.city &&
            item.tipo_plano === req.params.plan_type
        );

        res.status(200).json(jsonTable);
    }

    three(req: Request<ThreeParams>, res: Response<SearchExcelResponse[]>) {
        const jsonTable = getJsonFromExcelTable()
        .filter((item) => 
            item.cidade === req.params.city &&
            item.tipo_plano === req.params.plan_type &&
            item.acomodacao === req.params.accomodation
        );
        res.status(200).json(jsonTable);
    }

    four(req: Request<FourParams>, res: Response<SearchExcelResponse[]>) {
        const jsonTable = getJsonFromExcelTable()
        .filter((item) => 
            item.cidade === req.params.city &&
            item.tipo_plano === req.params.plan_type &&
            item.acomodacao === req.params.accomodation &&
            item.plano_grupo === req.params.plan_group
        );
        res.status(200).json(jsonTable);
    }
}