function init_main_options_counter() {
    const containers = document.querySelectorAll(
        '.card-main-option-quantity'
    );

    containers.forEach((container) => {
        const code = container.dataset.code;

        const count_span = container.querySelector('.qty-count');
        const btn_minus = container.querySelector('.btn-minus');
        const btn_plus = container.querySelector('.btn-plus');

        const get_counters = () => {
            return JSON.parse(
                localStorage.getItem('chosen_counters')
            ) || {};
        };

        const current_counters = get_counters();

        let current_qty = current_counters[code] || 0;

        count_span.textContent = current_qty;

        const update_quantity = (new_qty) => {
            const chosen_counters = get_counters();

            current_qty = Math.max(0, new_qty);

            if (current_qty > 0) {
                chosen_counters[code] = current_qty;
            } else {
                delete chosen_counters[code];
            }

            count_span.textContent = current_qty;

            localStorage.setItem(
                'chosen_counters',
                JSON.stringify(chosen_counters)
            );
        };

        btn_plus.addEventListener('click', () => {
            update_quantity(current_qty + 1);
        });

        btn_minus.addEventListener('click', () => {
            if (current_qty > 0) {
                update_quantity(current_qty - 1);
            }
        });
    });
}

export default init_main_options_counter;