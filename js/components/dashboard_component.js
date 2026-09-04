function dashboard_component(type) {
    return `
        <div class="dashboard" data-dashboard="${type}">
            <div class="dashboard-period">
                    <div class="dashboard-period-initial-date">
                        <span>Data Inicial</span>
                        <input type="date" />
                    </div>
                    <div class="dashboard-period-final-date">
                        <span>Data Final</span>
                        <input type="date"/>
                    </div>
                    <div class="dashboard-period-commands">
                        <button class="dashboard-period-search-command">Buscar</button>
                        <button class="dashboard-period-comeback-command">Voltar</button>
                    </div>
            </div>
            <div class="dashboard-painel">
                <div class="dashboard-painel-display">
                    <div class="dashboard-painel-display-header">
                        <div><h3>DADOS EM FORMA DE GRÁFICOS</h3></div>
                    </div>
                    <div class="dashboard-painel-display-charts">
                        <canvas class="dashboard-painel-display-bar-chart"></canvas>
                        <canvas class="dashboard-painel-display-donut-chart"></canvas>
                    </div>
                </div>
                <div class="dashboard-painel-commands">
                    <button class="dashboard-painel-comeback-command">Voltar</button>
                </div>
            </div>
            <div class="dashboard-display">
                <div class="dashboard-header">
                    <div><h3>Dashboard</h3></div>
                    <div class="dashboard-header-period">
                        <div>
                            <h3>04/09/2026 - 25/09/2026</h3>
                            <i class="fa-solid fa-angle-down"></i>
                        </div>
                    </div>
                
                </div>
                <div class="dashboard-display-header"></div>
                <div class="dashboard-content">
                    <div class="dashboard-performance">
                        <div><h3>PERFOMANCE</h3></div>
                        <div><i class="fa-solid fa-chart-simple"></i></div>
                    </div>
                    <div class="dashboard-completeness">
                        <h3>META / COMPLETUDE</h3>
                        <h3>0%</h3>
                        <span>0 / 0</span>
                    </div>
                </div>
                <div class="dashboard-bottom">
                    <div class="dashboard-ranking">
                        <div><h3>RANKING</h3></div>
                        <div class="dashboard-ranking-content"></div>
                    </div>
                </div>
                <div class="dashboard-display-commands">
                    <button class="dashboard-display-comeback-command">Voltar</button>
                </div>
            </div>
        </div>
    `;
}

export default dashboard_component;