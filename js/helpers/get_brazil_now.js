function get_brazil_now(type_of_month) {
    const now = new Date();
    return new Intl.DateTimeFormat('pt-br', {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: type_of_month,
        day: '2-digit'
    }).formatToParts(now);
}

export default get_brazil_now;