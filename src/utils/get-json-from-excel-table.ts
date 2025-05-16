import convertToJson from "convert-excel-to-json";
import { readFileSync, writeFileSync } from 'fs'
import { SearchExcelResponse } from "../types/response";

const getJsonFromExcelTable = () => {
    const result = (convertToJson({
        source: readFileSync(`./res/excels/tabela_cotacoes.xlsx`),
        header: {
            rows: 1
        },
        sheets: [
            'Sheet1'
        ],
        columnToKey: {
            A: "plano_grupo",
            B: "coparticipacao_tipo",
            C: "segmentacao",
            D: "acomodacao",
            E: "assistencia_modalidade",
            F: "codigo_interno",
            G: "registro_ans",
            H: "cidade",
            I: "validade_valores",
            J: "tipo_plano",
            K: "preco_00_a_18_anos",
            L: "preco_19_a_23_anos",
            M: "preco_24_a_28_anos",
            N: "preco_29_a_33_anos",
            O: "preco_34_a_38_anos",
            P: "preco_39_a_43_anos",
            Q: "preco_44_a_48_anos",
            R: "preco_49_a_53_anos",
            S: "preco_54_a_58_anos",
            T: "preco_59_anos_ou_mais",
            U: "preco_todas_idades",
            V: "consultas_eletivas",
            W: "consultas_urgencia",
            X: "exames_simples",
            Y: "exames_complexos",
            Z: "terapias_neurologicas",
            AA: "demais_terapias",
            AB: "desconto_vidas",
            AC: "desconto_familiares",
            AD: "quantidade_de_familiares"
        }
    })).Sheet1;

    return result.map(item => {
        return {
            ...item,
            preco_00_a_18_anos: item.preco_00_a_18_anos === '' ? null : item.preco_00_a_18_anos,
            preco_19_a_23_anos: item.preco_19_a_23_anos === '' ? null : item.preco_19_a_23_anos,
            preco_24_a_28_anos: item.preco_24_a_28_anos === '' ? null : item.preco_24_a_28_anos,
            preco_29_a_33_anos: item.preco_29_a_33_anos === '' ? null : item.preco_29_a_33_anos,
            preco_34_a_38_anos: item.preco_34_a_38_anos === '' ? null : item.preco_34_a_38_anos,
            preco_39_a_43_anos: item.preco_39_a_43_anos === '' ? null : item.preco_39_a_43_anos,
            preco_44_a_48_anos: item.preco_44_a_48_anos === '' ? null : item.preco_44_a_48_anos,
            preco_49_a_53_anos: item.preco_49_a_53_anos === '' ? null : item.preco_49_a_53_anos,
            preco_54_a_58_anos: item.preco_54_a_58_anos === '' ? null : item.preco_54_a_58_anos,
            preco_59_anos_ou_mais: item.preco_59_anos_ou_mais === '' ? null : item.preco_59_anos_ou_mais,
            preco_todas_idades: item.preco_todas_idades === '' ? null : item.preco_todas_idades,
            consultas_eletivas: item.consultas_eletivas === '' ? null : item.consultas_eletivas,
            consultas_urgencia: item.consultas_urgencia === '' ? null : item.consultas_urgencia,
            exames_simples: item.exames_simples === '' ? null : item.exames_simples,
            exames_complexos: item.exames_complexos === '' ? null : item.exames_complexos,
            terapias_neurologicas: item.terapias_neurologicas === '' ? null : item.terapias_neurologicas,
            demais_terapias: item.demais_terapias === '' ? null : item.demais_terapias,
            desconto_vidas: item.desconto_vidas === '' ? null : item.desconto_vidas / 100, 
            desconto_familiares: item.desconto_familiares === '' ? null : (item.desconto_familiares as string).split(',').map(item => Number(item) / 100),
            quantidade_de_familiares: item.quantidade_de_familiares === '' ? null : (item.quantidade_de_familiares as string).split(',').map(Number)
        }
    }) as SearchExcelResponse[]
}

export default getJsonFromExcelTable