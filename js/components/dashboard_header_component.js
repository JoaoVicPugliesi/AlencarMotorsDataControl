function dashboard_header_component(name, code, total, percentage) {
    return `
        <div class="dashboard-header-component" data-total="${total}" data-code="${code}">
            <div >
                <h3>${name}</h3>
            </div>
            <div>
                <h3>${total}</h3>
            </div>
            <div>
                <span>0%</span>
            </div>
        </div>
    `
}

export default dashboard_header_component;