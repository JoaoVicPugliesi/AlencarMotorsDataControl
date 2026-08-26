function handle_card_navigation(container_selector = '.cards-main-slider') {
    const container = document.querySelector(container_selector);
    if (!container) return;

    container.addEventListener('click', (e) => {
        const trigger_add = e.target.closest('.card-counter-add');
        if (trigger_add) {
            document.querySelectorAll('.card, .card-main-options, .card-main-confirm, .card-main-datas').forEach(el => {
                el.classList.remove('opened');
            });
            document.querySelectorAll('.card-main-option').forEach(el => {
                el.classList.remove('clicked');
            });

            localStorage.setItem('chosen_counters', JSON.stringify({}));

            const card = trigger_add.closest('.card');
            const options_panel = card?.querySelector('.card-main-options');
            if (options_panel) {
                options_panel.classList.add('opened');
            }
            return;
        }

        const trigger_data = e.target.closest('.card-counter-data');
        if (trigger_data) {
            document.querySelectorAll('.card, .card-main-options, .card-main-confirm, .card-main-datas').forEach(el => {
                el.classList.remove('opened');
            });
            document.querySelectorAll('.card-main-option').forEach(el => {
                el.classList.remove('clicked');
            });

            localStorage.setItem('chosen_counters', JSON.stringify({}));
            const card = trigger_data.closest('.card');
            const options_panel = card?.querySelector('.card-main-data');
            if (options_panel) {
                options_panel.classList.add('opened');
            }
            return;
        }

        const trigger_advance = e.target.closest('.card-main-options-advance');
        if (trigger_advance) {
            const counters = JSON.parse(localStorage.getItem('chosen_counters')) || {};
            if (Object.keys(counters).length === 0) return;
            const card = trigger_advance.closest('.card');
            const confirm_panel = card?.querySelector('.card-main-confirm');
            if (confirm_panel) {
                confirm_panel.classList.add('opened');
            }
        }
    });
}

export default handle_card_navigation;