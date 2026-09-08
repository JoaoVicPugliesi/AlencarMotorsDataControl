import counters from "../../../data/counters.js";
import get_now from "../../helpers/get_now.js";
import open_close_employees_painel_diary from "./open_close_employees_painel_diary.js";

function make_employees_painel(id, db, data, table) {
    table.innerHTML = '';
    const t_head = document.createElement('thead');
    const header_row = document.createElement('tr');
    const counter_header = document.createElement('th');
    counter_header.textContent = 'Campo';
    header_row.appendChild(counter_header);
    const brazil_date = get_now('2-digit');
    const year = Number(
        brazil_date.find(part => part.type === 'year').value
    );
    const month = Number(
        brazil_date.find(part => part.type === 'month').value
    );
    const brazil_day = Number(
        brazil_date.find(part => part.type === 'day').value
    );
    const days_in_month = new Date(
        year,
        month,
        0
    ).getDate();
    const data_by_day = {};
    data.forEach(item => {
        const day = Number(
            item.date.split('-')[2]
        );
        data_by_day[day] = item;
    });
    for (let day = 1; day <= days_in_month; day++) {
        const th = document.createElement('th');

        const formatted_month = String(month).padStart(2, '0');
        const formatted_day = String(day).padStart(2, '0');

        const date = `${year}-${formatted_month}-${formatted_day}`;

        th.textContent = day;
        th.classList.add('th');
        
        if (day !== brazil_day) {
            th.classList.add('disabled-day');
            open_close_employees_painel_diary(
                id, 
                db,
                th,
                'read',
                data,
                date
            );
        }

        header_row.appendChild(th);
    }

    t_head.appendChild(header_row);

    const t_body = document.createElement('tbody');

    counters.forEach(counter => {
        const row = document.createElement('tr');

        row.dataset.code = counter.code;

        const name = document.createElement('th');
        name.textContent = counter.name;

        row.appendChild(name);

        for (let day = 1; day <= days_in_month; day++) {
            const cell = document.createElement('td');

            cell.classList.add('td');
            cell.dataset.day = day;

            const daily_data = data_by_day[day];

            const value = daily_data
                ? daily_data[counter.code]
                : 0;

            cell.textContent = value ?? 0;

            if (day === brazil_day) {
                cell.contentEditable = 'true';
                cell.dataset.editable = 'true';
            } else {
                cell.contentEditable = 'false';
                cell.classList.add('disabled-day');
            }

            row.appendChild(cell);
        }

        t_body.appendChild(row);
    });

    table.appendChild(t_head);
    table.appendChild(t_body);
}

export default make_employees_painel;