import get_current_date from "./get_current_date.js";

function handle_period_helper(year, month) {
    const month_start = `${year}-${month}-01`;
    const month_last_day = new Date(
        Date.UTC(
            Number(year),
            Number(month),
            0
        ));
    const month_end = `${year}-${month}-${String(month_last_day.getUTCDate()).padStart(2, '0')}`;
    return {
        initial_day: month_start,
        final_day: month_end
    };
}

function handle_period(mode, initial_day, final_day) {
    const parts = get_current_date().split('-');
    const [year, month, day] = parts.map(Number);
    if (mode === 'today') {
        return {
            initial_day: `${year}-${month}-${day}`,
            final_day: `${year}-${month}-${day}`
        }
    }
    if (mode === 'month') {
        const { initial_day: formatted_initial_day, final_day: formatted_final_day } = handle_period_helper(year, month);
        return {
            initial_day: formatted_initial_day,
            final_day: formatted_final_day
        }
    }
    if (mode === 'period') {
        if (initial_day && final_day) {
            return {
                initial_day,
                final_day
            };
        }

        const { initial_day: formatted_initial_day, final_day: formatted_final_day } = handle_period_helper(year, month);
        return {
            initial_day: formatted_initial_day,
            final_day: formatted_final_day
        }
    }
}

export default handle_period;