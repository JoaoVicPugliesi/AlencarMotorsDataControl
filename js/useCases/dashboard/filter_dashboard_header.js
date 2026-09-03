import filter_employee from '../../helpers/filter_employee.js';

function filter_dashboard_header(employees, data, type) {
    const dashboard_header =
    document.querySelectorAll('.dashboard-header-component');
    dashboard_header.forEach((employee) => {
        employee.addEventListener('click', () => {
            filter_employee(employee, employees, data, type);
        });
    });
    const default_employee =
        document.querySelector(
            '.dashboard-header-component[data-code="leads_crm"]'
        );
    if (default_employee) {
        filter_employee(default_employee, employees, data, type);
    }
}

export default filter_dashboard_header;