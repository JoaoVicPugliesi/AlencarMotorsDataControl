import dashboard_component from "../../components/dashboard_component.js";
import open_close_dashboard from "./open_close_dashboard.js";
import open_close_dashboard_painel from "./open_close_dashboard_painel.js";

const employees_main_painel = document.querySelector(
    '.employees-main-painel'
);

const admins_main_painel = document.querySelector(
    '.admins-main-painel'
);

function display_dashboards(employees, db) {

    employees_main_painel.innerHTML += dashboard_component('employees');

    admins_main_painel.innerHTML += dashboard_component('admins');

    open_close_dashboard(employees, db, 'employees');
    open_close_dashboard(employees, db, 'admins');
    open_close_dashboard_painel('employees');
    open_close_dashboard_painel('admins');
}

export default display_dashboards;