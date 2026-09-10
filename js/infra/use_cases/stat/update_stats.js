import show_message from "../../../helpers/show_message.js";

async function update_stats(id, db) {
    const employees_main_painel = document.querySelector('.employees-main-painel');
    const editable_cells = document.querySelectorAll(
        '.employees-main-painel-display td[data-editable="true"]'
    );
    const data = {
        employee_id: id,
        date: new Intl.DateTimeFormat('en-CA', {
            timeZone: 'America/Sao_Paulo'
        }).format(new Date())
    };
    if(editable_cells) {
        editable_cells.forEach(cell => {
            const row = cell.closest('tr');
            const counter_code = row.dataset.code;
            const value = Number(
                cell.textContent.trim()
            ) || 0;
            data[counter_code] = value;
        });
    }
    const { data: result, error } = await db
        .from('stats')
        .upsert (
            {
                ...data
            },
            {
                onConflict: 'employee_id,date'
            }
        )
        .select();
    if (error) {
        show_message(employees_main_painel, 'error', 'Falhou em atualizar a tabela');
        return;
    }
    show_message(employees_main_painel, 'success', 'Tabela atualizada');
    return result;
}

export default update_stats;