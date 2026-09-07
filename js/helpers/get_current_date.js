import get_now from "./get_now.js";

function get_current_date() {
    const date = get_now('2-digit');

    const year = date.find(
        part => part.type === 'year'
    ).value;

    const month = date.find(
        part => part.type === 'month'
    ).value;

    const day = date.find(
        part => part.type === 'day'
    ).value;

    const current_date = `${year}-${month}-${day}`;
    return current_date;
}

export default get_current_date;