function open_confirm_card(class_name) {
    const dashboards = document.querySelectorAll(`.${class_name}-dashboard-add`);

    dashboards.forEach((d) => {
        d.addEventListener(`click`, (e) => {
            const card = e.target.closest(`.${class_name}`);
            const card_confirm = card.querySelector(`.${class_name}-main-confirm`);
            const input = card_confirm.querySelector(`.${class_name}-main-confirm-input input`);

            card_confirm.classList.add(`opened`);

            input.focus();
        });
    });
}

function close_confirm_card (class_name) {
    const dashboards = document.querySelectorAll(`.${class_name}-main-confirm-close`);
    dashboards.forEach((d) => {
        d.addEventListener(`click`, (e) => {
            const card = e.target.closest(`.${class_name}`);
            const card_confirm = card.querySelector(`.${class_name}-main-confirm`);
            card_confirm.classList.remove(`opened`);
        });
    });
}

function open_close_confirm_card () {
    open_confirm_card('card');
    close_confirm_card('card');
    open_confirm_card('admin-card');
    close_confirm_card('admin-card');
}

export default open_close_confirm_card;