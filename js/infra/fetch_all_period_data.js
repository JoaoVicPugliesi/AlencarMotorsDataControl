import handle_date_parts from "../helpers/handle_date_parts.js";

async function fetch_all_period_data(db, initial_day = null, final_day = null) {
    const {
        initial_day: formatted_initial_day,
        final_day: formatted_final_day
    } = handle_date_parts(initial_day, final_day);
    console.log('Fetching data for period:', formatted_initial_day, formatted_final_day);
    const { data, error } = await db
        .from('employee_daily_stats')
        .select('*')
        .gte('date', formatted_initial_day)
        .lte('date', formatted_final_day)
        .order('date', {
            ascending: true
        });

    if (error) {
        console.error(
            'Error getting dashboard data:',
            error
        );

        return null;
    }

    const splited_reversed_formatted_initial_day = formatted_initial_day.split('-').reverse();
    const splited_reversed_formatted_final_day = formatted_final_day.split('-').reverse();
    return {
        data: data,
        initial_day: splited_reversed_formatted_initial_day.join('-'),
        final_day: splited_reversed_formatted_final_day.join('-')
    };
}

export default fetch_all_period_data;