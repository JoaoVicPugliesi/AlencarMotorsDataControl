import goals_properties from "../../data/goals_properties.js";

function make_dashboard_goals(data) {
    const table = document.querySelector('.dashboard-goals-display');

    table.innerHTML = '';

    if (!data || data.length === 0) return;

    const properties = Object.keys(data[0]).filter(
        key => key !== 'name' && key !== 'code'
    );
    const t_head = document.createElement('thead');
    const header_row = document.createElement('tr');

    const counter_header = document.createElement('th');
    counter_header.textContent = 'Campo';

    header_row.appendChild(counter_header);

    goals_properties.forEach(property => {

        const header = document.createElement('th');

        header.textContent = property.name;
        header.dataset.property = property.code;

        header_row.appendChild(header);
    });

    t_head.appendChild(header_row);

    const t_body = document.createElement('tbody');

    data.forEach(counter => {

        const row = document.createElement('tr');

        row.dataset.code = counter.code;

        const name = document.createElement('th');

        name.textContent = counter.name;
        row.appendChild(name);

        properties.forEach(property => {

            const cell = document.createElement('td');
            cell.classList.add('td');
            cell.classList.add('disabled-day');

            cell.dataset.property = property;

            cell.textContent = counter[property];

            row.appendChild(cell);
        });

        t_body.appendChild(row);
    });

    table.appendChild(t_head);
    table.appendChild(t_body);
}

export default make_dashboard_goals;