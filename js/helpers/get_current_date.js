import get_now from "./get_now.js";

function get_current_date() {
    const now = get_now();
    const year = now.find(
        part => part.type === 'year'
    ).value;

    const month = now.find(
        part => part.type === 'month'
    ).value;
    const day = now.find(
        part => part.type === 'day'
    ).value;

    const current_date = `${year}-${month}-${day}`;
    return current_date;
}

export default get_current_date;