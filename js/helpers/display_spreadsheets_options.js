function display_spreadsheets_options (employees) {
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
}

export default display_spreadsheets_options;