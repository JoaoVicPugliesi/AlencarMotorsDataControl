import make_dashboard from "./make_dashboard.js";
import select_monthly_dashboard_data from "./select_monthly_dashboard_data.js";

async function update_monthly_dashboard_data(id, db) {

    const editable_cells = document.querySelectorAll(
        '.dashboard-display td[data-editable="true"]'
    );

    const data = {
        employee_id: id,
        date: new Intl.DateTimeFormat('en-CA', {
            timeZone: 'America/Sao_Paulo'
        }).format(new Date())
    };

    editable_cells.forEach(cell => {
        const row = cell.closest('tr');

        const counter_code = row.dataset.code;

        const value = Number(
            cell.textContent.trim()
        ) || 0;

        data[counter_code] = value;
    });

    console.log(data);

    const { data: result, error } = await db
        .from('employee_daily_stats')
        .upsert (
            data,
            {
                onConflict: 'employee_id,date'
            }
        )
        .select();

    if (error) {
        console.error(
            'Error updating dashboard:',
            error
        );

        return null;
    }

    /* const renewed_data = await select_monthly_dashboard_data(id, db);
    make_dashboard(renewed_data);
    */
    return result;
}

export default update_monthly_dashboard_data;