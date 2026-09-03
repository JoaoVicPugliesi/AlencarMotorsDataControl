import scroll_to_section from "./js/helpers/scroll_to_section.js";
import toggle_input_visibility_caller from "./js/helpers/toggle_input_visibilty.js";
import fetch_employees_data from "./js/useCases/fetch_employees_data.js"
import open_close_confirm_card from "./js/helpers/open_close_confirm_card.js";
import open_close_employees_painel from "./js/useCases/employees/open_close_employees_painel.js";
import open_close_employees_painel_goals from "./js/useCases/employees/open_close_employees_painel_goals.js";
import open_sandwich from "./js/helpers/open_sandwich.js";
import select_current_goal from "./js/useCases/dashboard/select_current_goal.js";
import open_close_admins_painel from "./js/useCases/admins/open_close_admins_painel.js";
import open_close_admins_painel_goals from "./js/useCases/admins/open_close_admins_painel_goals.js";
import update_dashboard_goals from "./js/useCases/dashboard/update_dashboard_goals.js";
import display_employees_cards from "./js/useCases/admins/display_employees_cards.js";
import display_admins_cards from "./js/useCases/admins/display_admins_cards.js";
import display_dashboards from "./js/useCases/dashboard/display_dashboards.js";

const supabase_url = 'https://lntwexedkbcrmayltrwo.supabase.co';
const supabase_key = 'sb_publishable_tvJ9_vYavIo_-6sk_ncudQ_AhDelOGY';
const db = window.supabase.createClient(supabase_url, supabase_key);

document.addEventListener('DOMContentLoaded', async () => {
    scroll_to_section('employees');
    open_sandwich();
    const employees = await fetch_employees_data(db);
    const { goals_object }  = await select_current_goal(db);
    localStorage.setItem('dashboard_goals', JSON.stringify(goals_object));
    display_employees_cards(employees);
    display_admins_cards(employees);
    display_dashboards(employees, db);
    toggle_input_visibility_caller();
    open_close_confirm_card();
    open_close_employees_painel(employees, db);
    open_close_employees_painel_goals();
    open_close_admins_painel(employees);
    open_close_admins_painel_goals();
    update_dashboard_goals(db);
});