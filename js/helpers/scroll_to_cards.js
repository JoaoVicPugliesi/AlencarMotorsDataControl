function scroll_to_cards(id_name) {
    const component = document.getElementById(`${id_name}`);
    const component_top = component.offsetTop;
    window.scrollTo({
        top: component_top,
        behavior: 'smooth'
    });
}

export default scroll_to_cards;