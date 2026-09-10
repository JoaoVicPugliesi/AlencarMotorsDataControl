import scroll_to_section from "./js/helpers/scroll_to_section.js";
import toggle_input_visibility_caller from "./js/helpers/toggle_input_visibilty.js";
import get_employees from "./js/infra/use_cases/employee/get_employees.js";
import open_close_confirm_card from "./js/helpers/open_close_confirm_card.js";
import open_close_employees_painel from "./js/useCases/employees/open_close_employees_painel.js";
import open_close_employees_painel_goals from "./js/useCases/employees/open_close_employees_painel_goals.js";
import open_sandwich from "./js/helpers/open_sandwich.js";
import open_close_admins_painel from "./js/useCases/admins/open_close_admins_painel.js";
import open_close_admins_painel_goals from "./js/useCases/admins/open_close_admins_painel_goals.js";
import display_dashboards from "./js/useCases/dashboard/display_dashboards.js";
import supabase_connect from "./js/supabase/supabase_connect.js";
import save_in_storage_goal from "./js/useCases/dashboard/save_in_storage_goal.js";
import display_cards_caller from "./js/helpers/display_cards.js";
import open_close_spreadsheets from "./js/useCases/admins/open_close_spreadsheets.js";
import display_spreadsheets_options from "./js/helpers/display_spreadsheets_options.js";

document.addEventListener('DOMContentLoaded', async () => {
    localStorage.clear();
    const db = supabase_connect(window.supabase);
    scroll_to_section('employees');
    open_sandwich();
    const { employees, status } = await get_employees(db);
    if(status == 200) {
        await save_in_storage_goal(db);
        display_cards_caller(employees);
        display_dashboards(employees, db);
        display_spreadsheets_options(db, employees);
        toggle_input_visibility_caller();
        open_close_confirm_card();
        open_close_employees_painel(db);
        open_close_employees_painel_goals();
        open_close_admins_painel();
        open_close_admins_painel_goals(db);
        open_close_spreadsheets(db);
    }
});