function get_now(type_of_month) {
    const now = new Date();
    return new Intl.DateTimeFormat('en', {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: type_of_month,
        day: '2-digit'
    }).formatToParts(now);
}

export default get_now;