function data_numbers(post_counter, leads_counter, passantes_counter, leads_atendidos_counter, prospection_counter, spoken_prospection_counter, sales_counter, sales_in_negotiation_counter, cadastros_counter, simulation_counter) {
    const numbers = [
        {
            name: 'POST',
            number: `${post_counter}`
        },
        {
            name: 'LEADS',
            number: `${leads_counter}`
        },
        {
            name: 'PASSANTES',
            number: `${passantes_counter}`
        },
        {
            name: 'LEADS ATENDIDOS',
            number: `${leads_atendidos_counter}`
        },
        {
            name: 'PROSPECÇÃO',
            number: `${prospection_counter}`
        },
        {
            name: 'PROSPECÇÃO FALADA',
            number: `${spoken_prospection_counter}`
        },
        {
            name: 'VENDAS',
            number: `${sales_counter}`
        },
        {
            name: 'VENDAS EM NEGOCIAÇÃO',
            number: `${sales_in_negotiation_counter}`
        },
        {
            name: 'CADASTROS',
            number: `${cadastros_counter}`
        },
        {
            name: 'SIMULAÇÕES',
            number: `${simulation_counter}`
        }
    ];

    return numbers;
}

export default data_numbers;
