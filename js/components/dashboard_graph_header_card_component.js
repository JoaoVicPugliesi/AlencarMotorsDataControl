function dashboard_graph_header_card_component(name, code, total, percentage) {
    return `
        <div class="dashboard-graph-header-card" data-total="${total}" data-code="${code}">
            <div >
                <h3>${name}</h3>
            </div>
            <div>
                <h3>${total}</h3>
            </div>
            <div>
                <span>25%</span>
            </div>
        </div>
    `
}

export default dashboard_graph_header_card_component;