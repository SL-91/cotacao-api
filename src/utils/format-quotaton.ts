import { Quotation } from "../generated/prisma";

const formatQuotation = (quotations: Quotation[]) => {
    return quotations.map((item) => {
        return {
            ...item,
            id: Number(item.id),
            preco_00_a_18_anos: Number(item.preco_00_a_18_anos) || null,
            preco_19_a_23_anos: Number(item.preco_19_a_23_anos) || null,
            preco_24_a_28_anos: Number(item.preco_24_a_28_anos) || null,
            preco_29_a_33_anos: Number(item.preco_29_a_33_anos) || null,
            preco_34_a_38_anos: Number(item.preco_34_a_38_anos) || null,
            preco_39_a_43_anos: Number(item.preco_39_a_43_anos) || null,
            preco_44_a_48_anos: Number(item.preco_44_a_48_anos) || null,
            preco_49_a_53_anos: Number(item.preco_49_a_53_anos) || null,
            preco_54_a_58_anos: Number(item.preco_54_a_58_anos) || null,
            preco_59_anos_ou_mais: Number(item.preco_59_anos_ou_mais) || null,
            preco_todas_idades: Number(item.preco_todas_idades) || null,
            consultas_eletivas: Number(item.consultas_eletivas) || null,
            consultas_urgencia: Number(item.consultas_urgencia) || null,
            exames_simples: Number(item.exames_simples) || null,
            exames_complexos: Number(item.exames_complexos) || null,
            terapias_neurologicas: Number(item.terapias_neurologicas) || null,
            demais_terapias: Number(item.demais_terapias) || null,
            desconto_vidas: Number(item.desconto_vidas) || null,
            quantidade_de_familiares: item.quantidade_de_familiares?.split(",").map((item) => Number(item)) || null,
            desconto_familiares: item.desconto_familiares?.split(",").map((item) => Number(item)) || null
        }
    })
}

export default formatQuotation