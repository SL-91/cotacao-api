import { Request, Response } from "express";
import { FiveParams, FourParams, OneParams, SixParams, ThreeParams, TwoParams } from "../types/request";
import { SearchExcelResponse } from "../types/response";
import getJsonFromExcelTable from "../utils/get-json-from-excel-table";

export default new class CotacaoController {
    index(req: Request, res: Response) {
        res.status(200).json(getJsonFromExcelTable());
    }

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
            item.segmentacao === req.params.segmentation
        )
        res.status(200).json(jsonTable);
    }

    five(req: Request<FiveParams>, res:Response<SearchExcelResponse[]>) {        
        const jsonTable = getJsonFromExcelTable()
        .filter((item) => 
            item.cidade === req.params.city &&
            item.tipo_plano === req.params.plan_type &&
            item.acomodacao === req.params.accomodation &&
            item.segmentacao === req.params.segmentation &&
            item.plano_grupo === req.params.plan_group 
        )
        res.json(jsonTable);
    }

    six(req: Request<SixParams>, res:Response<SearchExcelResponse[]>) {        
        const jsonTable = getJsonFromExcelTable()
        .filter((item) => 
            item.cidade === req.params.city &&
            item.tipo_plano === req.params.plan_type &&
            item.acomodacao === req.params.accomodation &&
            item.segmentacao === req.params.segmentation &&
            item.plano_grupo === req.params.plan_group &&
            item.assistencia_modalidade === (Boolean(req.params.odonto) ? 'Médica 2' : 'Médica 1')
        )
        res.json(jsonTable);
    }
}