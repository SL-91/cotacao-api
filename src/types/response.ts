export type SearchExcelResponse = {
    plano_grupo: string
    coparticipacao_tipo: string
    segmentacao: string
    acomodacao: string
    assistencia_modalidade: string
    codigo_interno: number
    registro_ans: string
    cidade: string
    validade_valores: string
    tipo_plano: string
    preco_00_a_18_anos: number | null
    preco_19_a_23_anos: number | null
    preco_24_a_28_anos: number | null
    preco_29_a_33_anos: number | null
    preco_34_a_38_anos: number | null
    preco_39_a_43_anos: number | null
    preco_44_a_48_anos: number | null
    preco_49_a_53_anos: number | null
    preco_54_a_58_anos: number | null
    preco_59_anos_ou_mais: number | null
    preco_todas_idades: number | null
    consultas_eletivas: number | null
    consultas_urgencia: number | null
    exames_simples: number | null
    exames_complexos: number | null
    terapias_neurologicas: number | null
    demais_terapias: number | null
    desconto_vidas: number | null
    desconto_familiares: number[] | null
    quantidade_de_familiares: number[] | null
}