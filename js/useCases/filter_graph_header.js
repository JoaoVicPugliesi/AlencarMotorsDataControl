import filter_card from "../helpers/filter_card.js";

function filter_graph_header(employees, data) {

    const cards =
        document.querySelectorAll('.dashboard-graph-header-card');


    cards.forEach((card) => {
        card.addEventListener('click', () => {
            filter_card(card, employees, data);
        });
    });

    const default_card =
        document.querySelector(
            '.dashboard-graph-header-card[data-code="leads_crm"]'
        );

    if (default_card) {
        filter_card(default_card, employees, data);
    }
}

export default filter_graph_header;