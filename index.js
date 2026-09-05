import scroll_to_section from "./js/helpers/scroll_to_section.js";
import toggle_input_visibility_caller from "./js/helpers/toggle_input_visibilty.js";
import fetch_employees_data from "./js/infra/fetch_employees_data.js";
import open_close_confirm_card from "./js/helpers/open_close_confirm_card.js";
import open_close_employees_painel from "./js/useCases/employees/open_close_employees_painel.js";
import open_close_employees_painel_goals from "./js/useCases/employees/open_close_employees_painel_goals.js";
import open_sandwich from "./js/helpers/open_sandwich.js";
import fetch_dashboard_goals from "./js/infra/fetch_dashboard_goals.js";
import open_close_admins_painel from "./js/useCases/admins/open_close_admins_painel.js";
import open_close_admins_painel_goals from "./js/useCases/admins/open_close_admins_painel_goals.js";
import display_employees_cards from "./js/useCases/admins/display_employees_cards.js";
import display_admins_cards from "./js/useCases/admins/display_admins_cards.js";
import display_dashboards from "./js/useCases/dashboard/display_dashboards.js";
import supabase_connect from "./js/supabase/supabase_connect.js";

document.addEventListener('DOMContentLoaded', async () => {
    const db = supabase_connect(window.supabase);
    scroll_to_section('employees');
    open_sandwich();
    const employees = await fetch_employees_data(db);
    const { id, initial_date, goals_object}  = await fetch_dashboard_goals(db);
    localStorage.setItem('dashboard_goals', JSON.stringify({
        id: id,
        initial_date: initial_date,
        goals_object: goals_object
    }));
    display_employees_cards(employees);
    display_admins_cards(employees);
    display_dashboards(employees, db);
    toggle_input_visibility_caller();
    open_close_confirm_card();
    open_close_employees_painel(employees, db);
    open_close_employees_painel_goals();
    open_close_admins_painel(employees);
    open_close_admins_painel_goals(db);
});