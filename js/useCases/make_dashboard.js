import counters from "../../data/counters.js";

function make_dashboard() {
    const table = document.querySelector('.dashboard-display');

    const t_head = document.createElement('thead');
    const header_row = document.createElement('tr');

    const counter_header = document.createElement('th');
    counter_header.textContent = 'Campo';
    header_row.appendChild(counter_header);

    const now = new Date();

    const brazil_day = Number(
        new Intl.DateTimeFormat('pt-BR', {
            timeZone: 'America/Sao_Paulo',
            day: 'numeric'
        }).format(now)
    );

    for (let day = 1; day <= 31; day++) {
        const th = document.createElement('th');

        th.classList.add('th');
        th.textContent = day;
        if (day !== brazil_day) {
            th.classList.add('disabled-day');
        }

        header_row.appendChild(th);
    }

    t_head.appendChild(header_row);

    const t_body = document.createElement('tbody');

    counters.forEach(counter => {
        const row = document.createElement('tr');

        const name = document.createElement('th');
        name.textContent = counter.name;
        row.appendChild(name);

        for (let day = 1; day <= 31; day++) {
            const cell = document.createElement('td');

            cell.classList.add('td');
            cell.textContent = '0';
            if (day === brazil_day) {
                cell.contentEditable = 'true';
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

export default make_dashboard;