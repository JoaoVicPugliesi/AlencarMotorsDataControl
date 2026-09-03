function open_confirm_card(class_name) {
    const dashboards = document.querySelectorAll(`.${class_name}-dashboard-add`);

    dashboards.forEach((d) => {
        d.addEventListener(`click`, (e) => {
            const employee = e.target.closest(`.${class_name}`);
            const employee_confirm = employee.querySelector(`.${class_name}-main-confirm`);
            const input = employee_confirm.querySelector(`.${class_name}-main-confirm-input input`);
            
            employee_confirm.classList.add(`opened`);
            
            input.focus();
        });
    });
}

function close_confirm_card (class_name) {
    const dashboards = document.querySelectorAll(`.${class_name}-main-confirm-close`);
    dashboards.forEach((d) => {
        d.addEventListener(`click`, (e) => {
            const employee = e.target.closest(`.${class_name}`);
            const employee_confirm = employee.querySelector(`.${class_name}-main-confirm`);
            const input = employee_confirm.querySelector(`.${class_name}-main-confirm-input input`);
            input.value = '';
            employee_confirm.classList.remove(`opened`);
        });
    });
}

function open_close_confirm_employee () {
    open_confirm_card('employee');
    close_confirm_card('employee');
    open_confirm_card('admin');
    close_confirm_card('admin');
}

export default open_close_confirm_employee;