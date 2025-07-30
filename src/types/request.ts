export type OneParams = {
    state: string
}

export type TwoParams = {
    city: string
    state: string
}

export type ThreeParams = {
    city: string
    plan_type: string
    state: string
}

export type FourParams = {
    city: string
    state: string
    plan_type: string
    accomodation: string
}

export type FourResponse = {
    plano_grupo: string
    assistencia_modalidade: string
}

export type FiveParams = {
    city: string
    state: string
    plan_type: string
    accomodation: string
    plan_group: string
    odonto: string
}

export type SixParams = {
    city: string
    state: string
    plan_type: string
    accomodation: string
    plan_group: string
    odonto: string
    coparticipation_modality: string
}

export type SearchQueryRequest = {
    plano_grupo?: string
    coparticipacao_tipo?: string
    segmentacao?: string
    acomodacao?: string
    assistencia_modalidade?: string
    codigo_interno?: number
    registro_ans?: string
    cidade?: string
    validade_valores?: string
    tipo_plano?: string
    preco_00_a_18_anos?: number
    preco_19_a_23_anos?: number
    preco_24_a_28_anos?: number
    preco_29_a_33_anos?: number
    preco_34_a_38_anos?: number
    preco_39_a_43_anos?: number
    preco_44_a_48_anos?: number
    preco_49_a_53_anos?: number
    preco_54_a_58_anos?: number
    preco_59_anos_ou_mais?: number
    preco_todas_idades?: number
    consultas_eletivas?: number
    consultas_urgencia?: number
    exames_simples?: number
    exames_complexos?: number
    terapias_neurologicas?: number
    demais_terapias?: number
    desconto_vidas?: number
    desconto_familiares?: number[]
    quantidade_de_familiares?: number[]
}