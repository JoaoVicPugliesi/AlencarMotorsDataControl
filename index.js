import drag_slider from "./js/helpers/drag_slider.js";
import toggle_input_visibility from "./js/helpers/toggle_input_visibilty.js";
import add_column_count from "./js/useCases/add_column_count.js";
import display_employees_cards from "./js/useCases/display_employees_cards.js";
import fetch_employees_data from "./js/useCases/fetch_employees_data.js"
import handle_card_navigation from "./js/useCases/handle_card_navigation.js";
import handle_close_cards from "./js/useCases/handle_close_cards.js";
import toggle_main_options from "./js/useCases/toggle_main_option.js";
// import leaderboard_builder from "./js/useCases/leaderboard_builder.js";

const supabase_url = 'https://lntwexedkbcrmayltrwo.supabase.co';
const supabase_key = 'sb_publishable_tvJ9_vYavIo_-6sk_ncudQ_AhDelOGY';

const db = window.supabase.createClient(supabase_url, supabase_key);

document.addEventListener('DOMContentLoaded', async () => {
    const employees = await fetch_employees_data(db);
    display_employees_cards(employees);
    add_column_count(employees, db);
    handle_card_navigation();
    toggle_input_visibility();
    handle_close_cards();
    drag_slider();
    toggle_main_options();
});