import find_employee from "../helpers/find_employee.js";

function add_column_count(employees, db) {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        const card_main_confirm = card.querySelector('.card-main-confirm');
        if (!card_main_confirm) return;

        const button = card_main_confirm.querySelector('.card-main-confirm-btn');
        if (!button) return;

        button.addEventListener('click', async () => {
            const chosen_counters = JSON.parse(
                localStorage.getItem('chosen_counters')
            ) || {};

            const id = button.getAttribute('data-id');
            const employee = find_employee(id, employees);
            if (!employee) return;

            const input = card_main_confirm.querySelector(
                '.card-main-confirm-input input'
            );
            if (!input) return;

            if (Number(employee.password) !== Number(input.value)) {
                return;
            }

            const updates = {};

            Object.entries(chosen_counters).forEach(([column_key, quantity]) => {
                const qty_to_add = Number(quantity) || 0;
                if (qty_to_add > 0) {
                    const current_value = Number(employee[column_key]) || 0;
                    updates[column_key] = current_value + qty_to_add;
                }
            });

            if (Object.keys(updates).length === 0) {
                console.warn('No valid counter columns matched to update.');
                return;
            }

            const { data, error } = await db
                .from('employees')
                .update(updates)
                .eq('id', id)
                .select()
                .single();

            if (error) {
                console.error('Error updating counters:', error);
                return;
            }

            localStorage.removeItem('chosen_counters');

            window.location.reload();
        });
    });
}

export default add_column_count;