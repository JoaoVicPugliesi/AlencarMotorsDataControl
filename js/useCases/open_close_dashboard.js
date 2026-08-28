import find_employee from "../helpers/find_employee.js";
import capture_dashboard_data from "./capture_dashboard_data.js";

function open_dashboard(employees) {
    const confirm_btns = document.querySelectorAll('.card-main-confirm-btn');
    confirm_btns.forEach((d) => {
        d.addEventListener('click', (e) => {
            const id = d.getAttribute('data-id');
            const employee = find_employee(id, employees);
            if(!employee) return;
            const confirm = d.closest('.card-main-confirm');
            const input = confirm.querySelector('.card-main-confirm-input input');
            if(Number(employee.password) !== Number(input.value)) return;
            const dashboard = document.querySelector('.dashboard');
            capture_dashboard_data(id);
            dashboard.classList.add('opened');
        });
    });
}

function close_dashboard() {
    console.log('Close Dashboard');
}

function open_close_dashboard(employees) {
    open_dashboard(employees);
    close_dashboard();
}

export default open_close_dashboard;