import { NextFunction, Request, Response } from "express";
import { OneParams } from "../types/request";
import { SearchExcelResponse } from "../types/response";
import getJsonFromExcelTable from "../utils/get-json-from-excel-table";

export default new class CotacaoController {
    public one(req: Request<OneParams>, res: Response<SearchExcelResponse[]>, next: NextFunction) {
        const jsonTable = getJsonFromExcelTable().filter((item) => item.tipo_plano === req.params.plan_type);
        res.status(200).json(jsonTable);
    }
}