import handle_period from "../helpers/handle_period.js";

async function get_period_stats(db, initial_day = null, final_day = null) {
    const {
        initial_day: formatted_initial_day,
        final_day: formatted_final_day
    } = handle_period(initial_day, final_day);
    const { data, error } = await db
        .from('stats')
        .select('*')
        .gte('date', formatted_initial_day)
        .lte('date', formatted_final_day)
        .order('date', {
            ascending: true
        });

    if (error) {
        return false;
    }

    const splited_reversed_formatted_initial_day = formatted_initial_day.split('-').reverse().join('-');
    const splited_reversed_formatted_final_day = formatted_final_day.split('-').reverse().join('-');
    return {
        data: data,
        initial_day: splited_reversed_formatted_initial_day,
        final_day: splited_reversed_formatted_final_day
    };
}

export default get_period_stats;