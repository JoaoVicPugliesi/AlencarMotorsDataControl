import employee_diary_component from "../components/employee_diary_component.js";
import get_current_date from "./get_current_date.js";
import show_message from "./show_message.js";
import update_stats_diary from "../infra/use_cases/stat/update_stats_diary.js";
import get_stats from "../infra/use_cases/stat/get_stats.js";

function open_close_diary(id, db, el, mode, data, date, container, painel) {
    el.removeEventListener('click', () => {});
    el.addEventListener('click', () => {
        const daily_data = data.find(item => item.date === date);
        if (!daily_data) {
            show_message(painel, 'error', `Não há dados para ${date.split('-').reverse().join('-')}`);
            return;
        }
        container.innerHTML = employee_diary_component(
            mode,
            daily_data.date,
            daily_data.diary
        );
        container.classList.add('opened');
        const comeback = container.querySelector(
            '.diary-comeback-command'
        );
        comeback.addEventListener('click', () => {
            container.classList.remove('opened');
        });
        const save = container.querySelector(
            '.diary-save-command'
        );
        if (save) {
            save.removeEventListener('click', () => {})
            save.addEventListener('click', async () => {
                const title = document.querySelector('.employees-main-painel-diary-title').value;
                const description = document.querySelector('.employees-main-painel-diary-description').value;
                const employees_main_painel_diary_command = document.querySelector('.employees-main-painel-diary-command');
                const current_date = get_current_date();
                const diary = {
                    title: title,
                    description: description
                }
                const res = await update_stats_diary(id, db, diary);
                if (res == false) return;
                const { status, json } = await get_stats('month', null, null, id);
                const { stats, initial_day, final_day } = json;
                open_close_diary(
                    id,
                    db,
                    employees_main_painel_diary_command,
                    'write',
                    stats,
                    current_date,
                    container,
                    painel
                );
            });
        }
    });
}

export default open_close_diary;