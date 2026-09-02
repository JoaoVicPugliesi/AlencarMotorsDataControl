const counter_groups = {

    leads: [
        {
            code: 'leads_crm',
            label: 'LEADS CRM'
        },
        {
            code: 'leads_carchat',
            label: 'LEADS CARCHAT'
        },
        {
            code: 'leads_served',
            label: 'LEADS ATENDIDOS'
        },
        {
            code: 'leads_served_spoken',
            label: 'LEADS ATD/FALADO'
        }
    ],

    prospection: [
        {
            code: 'prospection',
            label: 'PROSPECÇÃO'
        },
        {
            code: 'spoken_prospection',
            label: 'PROSPECÇÃO FALADA'
        }
    ],

    sales: [
        {
            code: 'sales',
            label: 'VENDAS'
        },
        {
            code: 'sales_in_negotiation',
            label: 'VENDAS EM NEGOCIAÇÃO'
        }
    ],

    registrations: [
        {
            code: 'registrations',
            label: 'CADASTROS'
        },
        {
            code: 'registrations_made',
            label: 'CADASTRO REALIZADO'
        },
        {
            code: 'registrations_approved',
            label: 'CADASTROS APROVADOS'
        },
    ],

    simulations: [
        {
            code: 'simulations_made',
            label: 'SIMULAÇÕES REALIZADAS'
        }
    ],

    passersby: [
        {
            code: 'passersby',
            label: 'PASSANTES'
        }
    ]
};

const counter_group_map = {

    leads_crm: 'leads',
    leads_carchat: 'leads',
    leads_served: 'leads',
    leads_served_spoken: 'leads',

    prospection: 'prospection',
    spoken_prospection: 'prospection',

    sales: 'sales',
    sales_in_negotiation: 'sales',

    registrations: 'registrations',
    registrations_made: 'registrations',
    registrations_approved: 'registrations',

    simulations_made: 'simulations',

    passersby: 'passersby'
};

export { counter_groups, counter_group_map }