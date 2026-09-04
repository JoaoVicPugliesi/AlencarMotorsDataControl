import get_now from "./get_now.js";

function handle_date_parts(initial_day = null, final_day = null) {

    if (initial_day && final_day) {
        return {
            initial_day,
            final_day
        };
    }

    const parts = get_now('2-digit');

    const year = parts.find(
        part => part.type === 'year'
    ).value;

    const month = parts.find(
        part => part.type === 'month'
    ).value;

    const initial_date =
        `${year}-${month}-01`;

    const last_day = new Date(
        Date.UTC(
            Number(year),
            Number(month),
            0
        )
    );

    const final_date =
        `${year}-${month}-${String(
            last_day.getUTCDate()
        ).padStart(2, '0')}`;

    return {
        initial_day: initial_date,
        final_day: final_date
    };
}

export default handle_date_parts;