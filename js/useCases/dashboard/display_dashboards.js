import dashboard_component from "../../components/dashboard_component.js";
import open_close_dashboard from "./open_close_dashboard.js";
import open_close_dashboard_painel from "./open_close_dashboard_painel.js";
import open_close_dashboard_period from "./open_close_dashboard_period.js";
import select_dashboard_period from './select_dashboard_period.js';
const employees_main_painel = document.querySelector(
    '.employees-main-painel'
);

const admins_main_painel = document.querySelector(
    '.admins-main-painel'
);
function display_dashboards(employees) {
    employees_main_painel.innerHTML += dashboard_component('employees');
    admins_main_painel.innerHTML += dashboard_component('admins');
    open_close_dashboard(employees, 'employees');
    open_close_dashboard(employees, 'admins');
    open_close_dashboard_painel('employees');
    open_close_dashboard_painel('admins');
    open_close_dashboard_period('employees');
    open_close_dashboard_period('admins');
    select_dashboard_period(employees, 'employees');
    select_dashboard_period(employees, 'admins');
}

export default display_dashboards;