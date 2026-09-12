import show_message from "../../../helpers/show_message.js";
import base_URL from "../../base_URL.js";

async function post_goal() {
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
    const current_date = new Date();
    const current_month =
        `${current_date.getFullYear()}-${String(current_date.getMonth() + 1).padStart(2, '0')}`;
    const last_month = initial_date.slice(0, 7);
    const same_month = last_month === current_month;
    const body = {
        id: id,
        same_month: same_month,
        goal_object: goal_object
    }
    const request = await fetch(`${base_URL}/post_goal`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const status = request.status;
    const json = await request.json();
    if(status === 400) {
        show_message(admins_main_painel_goals, 'error', json.message)
        return;
    }

    localStorage.setItem(
        'goal',
        JSON.stringify({
            id: json.id,
            initial_date: json.initial_date,
            goal_object: json.goal_object
        })
    );
    show_message(admins_main_painel_goals, 'success', json.message)
}

export default post_goal;