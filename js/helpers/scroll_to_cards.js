function scroll_to_cards() {
    const cards = document.getElementById('cards');
    const cards_top = cards.offsetTop;
    window.scrollTo({
        top: cards_top,
        behavior: 'smooth'
    });
}

export default scroll_to_cards;