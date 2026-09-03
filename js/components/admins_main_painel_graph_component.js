function admins-main_main_painel_graph_component(name, goal, progress) {
    let percentage = goal > 0 ? (progress / goal) * 100 : 0;
    percentage = Math.min(Math.max(percentage, 0), 100);
    return `
        <div class="admins-main-painel-graph-component">
            <div style="height: ${percentage}%" class="admins-main-painel-graph-component-progress-bar">
            </div>
            <div class="admins-main-painel-graph-component-goal">
                <h3>${goal}</h3>
            </div>
            <div class="admins-main-painel-graph-component-progress">
                <h3>${progress}</h3>
            </div>
            <div class="admins-main-painel-graph-component-field">
                <h3>${name}</h3>
            </div>
        </div>
    `
}

export default admins-main_main_painel_graph_component;