function open_employees_painel_diary () {
    const employees_main_painel_diary = document.querySelector('.employees-main-painel-diary');
    const employees_main_painel_diary_command = document.querySelector('.employees-main-painel-diary-command');
    employees_main_painel_diary_command.addEventListener('click', () => {
        employees_main_painel_diary.classList.add('opened');
    })
}

function close_employees_painel_diary () {
    const employees_main_painel_diary = document.querySelector('.employees-main-painel-diary');
    const diary_comeback_command = document.querySelector('.diary-comeback-command');
    diary_comeback_command.addEventListener('click', () => {
        employees_main_painel_diary.classList.remove('opened');
    })
}

function open_close_employees_painel_diary () {
    open_employees_painel_diary();
    close_employees_painel_diary();
}

export default open_close_employees_painel_diary;