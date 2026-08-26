
function handle_close_cards(container_selector = '.cards-main-slider') {
    const container = document.querySelector(container_selector);
    if (!container) return;

    container.addEventListener('click', (e) => {
        const close_confirm_btn = e.target.closest('.card-main-confirm-close');
        if (close_confirm_btn) {
            const confirm_panel = close_confirm_btn.closest('.card-main-confirm');
            confirm_panel?.classList.remove('opened');
            return;
        }
        const close_options_btn = e.target.closest('.card-main-options-menu-i');
        if (close_options_btn) {
            const card_options = close_options_btn.closest('.card-main-options');
            card_options?.classList.remove('opened');

            document.querySelectorAll('.card').forEach(c => c.classList.remove('opened'));
            document.querySelectorAll('.card-main-option').forEach(o => o.classList.remove('clicked'));
            document.querySelectorAll('.qty-count').forEach(o => o.innerHTML = 0);
            
            localStorage.setItem('chosen_counters', JSON.stringify({}));
        }
        const close_data_btn = e.target.closest('.card-main-data-menu-i');
        if (close_data_btn) {
            const card_data = close_data_btn.closest('.card-main-data');
            card_data?.classList.remove('opened');
            
            document.querySelectorAll('.card').forEach(c => c.classList.remove('opened'));
            document.querySelectorAll('.card-main-option').forEach(o => o.classList.remove('clicked'));
            document.querySelectorAll('.qty-count').forEach(o => o.innerHTML = 0);

            localStorage.setItem('chosen_counters', JSON.stringify({}));
        }
    });
}

export default handle_close_cards;