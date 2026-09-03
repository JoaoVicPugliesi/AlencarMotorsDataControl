import select_dashboard_goal from "./select_current_goal.js";

function update_dashboard_goals(db) {
    const save_command = document.querySelector(
        '.admins-main-painel-goals-save-command'
    );
    const table = document.querySelector(
        '.admins-main-painel-goals-display'
    );
    save_command.addEventListener('click', async () => {
        const rows = table.querySelectorAll('tbody tr');
        const goals_object = [];
        rows.forEach(row => {
            const code = row.dataset.code;
            const goal = row.querySelector('[data-property="goal"]');
            const active = row.querySelector('[data-property="active"]');
            const period = row.querySelector('[data-property="period"]');
            const description = row.querySelector('[data-property="description"]');
            goals_object.push({
                code: code,
                goal: Number(goal.textContent.trim()),
                name: row.querySelector('th').textContent.trim(),
                active: active.textContent.trim().toLowerCase(),
                period: period.textContent.trim().toLowerCase(),
                description: description.textContent.trim()
            });
        });
        const { id, initial_date } = await select_dashboard_goal(db);
        const currentDate = new Date();
        const currentMonth =
            `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
        const lastMonth = initial_date.slice(0, 7);
        const sameMonth = lastMonth === currentMonth;
        let data;
        let error;
        if (sameMonth) {
            ({ data, error } = await db
                .from('dashboard_goals')
                .update({
                    goals_object
                })
                .eq('id', id)
                .select());
        } else {
            ({ data, error } = await db
                .from('dashboard_goals')
                .insert({
                    initial_date: currentMonth + '-01',
                    goals_object
                })
                .select());
        }
        if (error) {
            console.error('Erro ao salvar metas:', error);
            return;
        }
        localStorage.setItem(
            'dashboard_goals',
            JSON.stringify(goals_object)
        );
    });
}

export default update_dashboard_goals;