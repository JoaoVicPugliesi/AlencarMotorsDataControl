import scroll_to_cards from "./js/helpers/scroll_to_cards.js";
import toggle_input_visibility_caller from "./js/helpers/toggle_input_visibilty.js";
import display_admins_cards from "./js/useCases/display_admins_cards.js";
import display_employees_cards from "./js/useCases/display_employees_cards.js";
import fetch_employees_data from "./js/useCases/fetch_employees_data.js"
import open_close_confirm_card from "./js/useCases/open_close_confirm_card.js";
import open_close_dashboard from "./js/useCases/open_close_dashboard.js";
import open_close_dashboard_goals from "./js/useCases/open_close_dashboard_goals.js";
import open_close_dashboard_graph from "./js/useCases/open_close_dashboard_graph.js";
import open_sandwich from "./js/useCases/open_sandwich.js";
import select_dashboard_goal from "./js/useCases/select_dashboard_goal.js";
// import leaderboard_builder from "./js/useCases/leaderboard_builder.js";

const supabase_url = 'https://lntwexedkbcrmayltrwo.supabase.co';
const supabase_key = 'sb_publishable_tvJ9_vYavIo_-6sk_ncudQ_AhDelOGY';
const db = window.supabase.createClient(supabase_url, supabase_key);

document.addEventListener('DOMContentLoaded', async () => {
    scroll_to_cards();
    open_sandwich();
    const employees = await fetch_employees_data(db);
    const dashboard_goal = await select_dashboard_goal(db);
    localStorage.setItem('dashboard_goals', JSON.stringify(dashboard_goal));
    display_employees_cards(employees);
    display_admins_cards(employees);
    toggle_input_visibility_caller();
    open_close_confirm_card();
    open_close_dashboard(employees, db);
    open_close_dashboard_goals();
    open_close_dashboard_graph(employees, db);
});