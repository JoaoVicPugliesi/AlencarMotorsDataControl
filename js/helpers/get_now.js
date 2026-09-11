function get_now() {
    const now = new Date();
    return new Intl.DateTimeFormat('en', {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).formatToParts(now);
}

export default get_now;