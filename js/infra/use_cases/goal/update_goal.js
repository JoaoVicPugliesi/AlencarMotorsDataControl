import show_message from "../../../helpers/show_message.js";

async function update_goal(db) {
    const admins_main_painel_goals = document.querySelector('.admins-main-painel-goals');
    const table = document.querySelector(
        '.admins-main-painel-goals-display'
    );
    const rows = table.querySelectorAll('tbody tr');
    const goal_object = [];
    rows.forEach(row => {
        const code = row.dataset.code;
        const goal = row.querySelector('[data-property="goal"]');
        const active = row.querySelector('[data-property="active"]');
        const period = row.querySelector('[data-property="period"]');
        const description = row.querySelector('[data-property="description"]');
        goal_object.push({
            code: code,
            goal: Number(goal.textContent.trim()),
            name: row.querySelector('th').textContent.trim(),
            active: active.textContent.trim().toLowerCase(),
            period: period.textContent.trim().toLowerCase(),
            description: description.textContent.trim()
        });
    });
    const { id, initial_date } = JSON.parse(localStorage.getItem('goal'));
    const currentDate = new Date();
    const currentMonth =
        `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
    const lastMonth = initial_date.slice(0, 7);
    const sameMonth = lastMonth === currentMonth;
    let data;
    let error;
    if (sameMonth) {
        ({ data, error } = await db
            .from('goals')
            .update({
                goal_object
            })
            .eq('id', id)
            .select()
            .single())
    
    } else {
        ({ data, error } = await db
            .from('goals')
            .insert({
                initial_date: currentMonth + '-01',
                goal_object
            })
            .select()
            .single())
    }
    if (error) {
        show_message(admins_main_painel_goals, 'error', 'Erro ao salvar metas')
        return;
    }

    localStorage.setItem(
        'goal',
        JSON.stringify({
            id: data.id,
            initial_date: data.initial_date,
            goal_object: data.goal_object
        })
    );
    show_message(admins_main_painel_goals, 'success', 'Novas Metas Salvas com sucesso')
}

export default update_goal;