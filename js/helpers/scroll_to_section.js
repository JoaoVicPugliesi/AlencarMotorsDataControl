function scroll_to_section(id) {
    const component = document.getElementById(`${id}`);
    const component_top = component.offsetTop;
    window.scrollTo({
        top: component_top,
        behavior: 'smooth'
    });
}

export default scroll_to_section;