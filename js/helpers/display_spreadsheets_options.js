import select_spreadsheet_option from "./select_spreadsheet_option.js";

function display_spreadsheets_options (db, employees) {
    const header = document.querySelector('.admins-main-painel-spreadsheets-header');
    header.innerHTML = '';
    employees.forEach((e) => {
        if(e.role == 'sale') {
            header.innerHTML += `
                <button data-id="${e.id}">
                    ${e.name}
                </button>
            `
        }
    })

    select_spreadsheet_option(db);
}

export default display_spreadsheets_options;