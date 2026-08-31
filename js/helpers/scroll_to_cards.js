function scroll_to_cards() {
    const cards = document.getElementById('cards');
    if (cards) {
        const cards_top = cards.offsetTop;
        window.scrollTo({
            top: cards_top,
            behavior: 'smooth'
        });
    }
    window.scrollTo({
        top: cards_top
    });
}

export default scroll_to_cards;