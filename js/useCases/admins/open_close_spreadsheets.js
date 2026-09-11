function open_spreadsheets () {
    const spreadsheets = document.querySelector('.admins-main-painel-spreadsheets');
    const spreadsheets_command = document.querySelector('.admins-main-painel-spreadsheets-command');
    spreadsheets_command.addEventListener('click', () => {
        spreadsheets.classList.add('opened');
    });
}

function close_spreadsheets () {
    const spreadsheets = document.querySelector('.admins-main-painel-spreadsheets');
    const comeback_command = document.querySelector('.admins-main-painel-spreadsheets-comeback-command');
    comeback_command.addEventListener('click', () => {
        spreadsheets.classList.remove('opened');
    });
}

function open_close_spreadsheets () {
    open_spreadsheets();
    close_spreadsheets();
}

export default open_close_spreadsheets;