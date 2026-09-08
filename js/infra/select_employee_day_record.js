import get_now from '../helpers/get_now.js';

async function select_employee_day_record(id, db) {
    const parts = get_now('2-digit');

    const year = parts.find(
        part => part.type === 'year'
    ).value;

    const month = parts.find(
        part => part.type === 'month'
    ).value;

    const day = parts.find(
        part => part.type === 'day'
    ).value;

    const today = `${year}-${month}-${day}`;

    const { data, error } = await db
        .from('employee_daily_stats')
        .select('*')
        .eq('employee_id', id)
        .eq('date', today)
        .maybeSingle();

    if (error) {
        return false;
    }

    if (data) {
        return true;
    }

    return false;
}

export default select_employee_day_record;

