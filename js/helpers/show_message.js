import success from "../components/messages/success.js";
import error from "../components/messages/error.js";

async function show_message(parent, mode, message) {
    let component;
    if (mode === 'success') {
        component = success(message);
    }
    if (mode === 'error') {
        component = error(message);
    }
    if (!component) return;
    parent.insertAdjacentHTML('beforeend', component);
    const message_element = parent.lastElementChild;
    requestAnimationFrame(() => {
        message_element.classList.add('active');
    });
    setTimeout(() => {
        message_element.classList.remove('active');
        setTimeout(() => { message_element.remove(); }, 1000);
    }, 3000);
}

export default show_message;
