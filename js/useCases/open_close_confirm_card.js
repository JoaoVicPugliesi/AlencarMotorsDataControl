function open_confirm_card () {
    const dashboards = document.querySelectorAll('.card-dashboard-add');
    dashboards.forEach((d) => {
        d.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            const card_confirm = card.querySelector('.card-main-confirm');
            card_confirm.classList.add('opened');
        });
    });
}

function close_confirm_card () {
    const dashboards = document.querySelectorAll('.card-main-confirm-close');
    dashboards.forEach((d) => {
        d.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            const card_confirm = card.querySelector('.card-main-confirm');
            card_confirm.classList.remove('opened');
        });
    });
}

function open_close_confirm_card () {
    open_confirm_card();
    close_confirm_card();
}

export default open_close_confirm_card;