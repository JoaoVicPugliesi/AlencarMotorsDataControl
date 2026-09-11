import handle_period from "../../../helpers/handle_period.js";

async function get_stats(db, mode, initial_day = null, final_day = null, id = null) {
    const {
        initial_day: formatted_initial_day,
        final_day: formatted_final_day
    } = handle_period(mode, initial_day, final_day);
    if (mode === 'today' && id) {
        const { data, error } = await db
            .from('stats')
            .select('*')
            .eq('employee_id', id)
            .eq('date', initial_day)
            .single();
        if (error) {
            return false;
        }
        if (data) {
            return true;
        }
        return false;
    }

    if (mode == 'month' && id) {
        const { data, error } = await db
            .from('stats')
            .select('*')
            .eq('employee_id', id)
            .gte('date', formatted_initial_day)
            .lt('date', formatted_final_day)
            .order('date', {
                ascending: true
            });

        if (error) {
            return false;
        }
        return data;
    }

    if (mode == 'period') {
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

}

export default get_stats;