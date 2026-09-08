import employee_diary_component from "../../components/employee_diary_component.js";
import get_current_date from "../../helpers/get_current_date.js";
import show_message from "../../helpers/show_message.js";
import save_daily_diary from "../../infra/save_daily_diary.js";
import select_monthly_dashboard_data from "../../infra/select_monthly_dashboard_data.js";

function open_close_employees_painel_diary(id, db, el, mode, data, date) {

    const diary_container = document.querySelector(
        '.employees-main-painel-diary'
    );
    const employees_main_painel = document.querySelector('.employees-main-painel');

    el.addEventListener('click', () => {

        const daily_data = data.find(item => item.date === date);
        console.log(daily_data);
        if (!daily_data) {
            show_message(employees_main_painel, 'error', `No data found for ${date}`)
            return;
        }

        diary_container.innerHTML = employee_diary_component(
            mode,
            daily_data.date,
            daily_data.diary
        );

        diary_container.classList.add('opened');

        const comeback = diary_container.querySelector(
            '.diary-comeback-command'
        );


        comeback.addEventListener('click', () => {
            diary_container.classList.remove('opened');
        });

        const save = diary_container.querySelector(
            '.diary-save-command'
        );

        if (save) {
            save.addEventListener('click', async () => {
                const title = document.querySelector('.employees-main-painel-diary-title').value;
                const description = document.querySelector('.employees-main-painel-diary-description').value;
                const employees_main_painel_diary_command = document.querySelector('.employees-main-painel-diary-command');
                const current_date = get_current_date();
                const diary = {
                    title: title,
                    description: description
                }
                const res = await save_daily_diary(id, db, diary);
                if (res == false) return;
                const data = await select_monthly_dashboard_data(id, db);
                open_close_employees_painel_diary(
                    id,
                    db,
                    employees_main_painel_diary_command,
                    'write',
                    data,
                    current_date
                );
            });
        }
    });
}

export default open_close_employees_painel_diary;