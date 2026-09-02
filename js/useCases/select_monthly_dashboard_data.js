import get_brazil_now from '../helpers/get_brazil_now.js';

async function select_monthly_dashboard_data(id, db) {
    const parts = get_brazil_now();

    const year = parts.find(
        part => part.type === 'year'
    ).value;

    const month = parts.find(
        part => part.type === 'month'
    ).value;

    const first_day = `${year}-${month}-01`;

    const next_month = new Date(
        Number(year),
        Number(month),
        1
    );

    const next_year = next_month.getFullYear();
    const next_month_number = String(
        next_month.getMonth() + 1
    ).padStart(2, '0');

    const first_day_next_month =
        `${next_year}-${next_month_number}-01`;

    const { data, error } = await db
        .from('employee_daily_stats')
        .select('*')
        .eq('employee_id', id)
        .gte('date', first_day)
        .lt('date', first_day_next_month)
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

export default select_monthly_dashboard_data;