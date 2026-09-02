function get_brazil_now() {
    const now = new Date();
    return new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).formatToParts(now);
}

export default get_brazil_now;