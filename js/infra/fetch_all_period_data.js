import get_brazil_now from "../helpers/get_brazil_now.js";

async function fetch_all_period_data(db, first_day = null, final_day = null) {
    if (!first_day || !final_day) {
        const parts = get_brazil_now('2-digit');

        const year = parts.find(
            part => part.type === 'year'
        ).value;

        const month = parts.find(
            part => part.type === 'month'
        ).value;

        first_day = `${year}-${month}-01`;

        const next_month = new Date(
            Number(year),
            Number(month),
            1
        );

        const next_year = next_month.getFullYear();

        const next_month_number = String(
            next_month.getMonth() + 1
        ).padStart(2, '0');

        final_day = `${next_year}-${next_month_number}-01`;
    }

    const { data, error } = await db
        .from('employee_daily_stats')
        .select('*')
        .gte('date', first_day)
        .lt('date', final_day)
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

    return data;
}

export default fetch_all_period_data;