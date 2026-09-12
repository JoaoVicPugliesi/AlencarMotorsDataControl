import loading from "../components/messages/loading.js";
import error from "../components/messages/error.js";
import success from "../components/messages/success.js";

function show_message(parent, mode, message, delay = 3000) {
    const message_holder = document.createElement('div');

    message_holder.classList.add('message-holder');

    if (mode === 'loading') {
        message_holder.innerHTML = loading(message);

        parent.append(message_holder);

        requestAnimationFrame(() => {
            message_holder.classList.add('active');
        });

        return message_holder;
    }

    message_holder.innerHTML =
        mode === 'success'
            ? success(message)
            : error(message);

    parent.append(message_holder);

    requestAnimationFrame(() => {
        message_holder.classList.add('active');
    });

    setTimeout(() => {
        message_holder.classList.remove('active');

        setTimeout(() => {
            message_holder.remove();
        }, 300);
    }, delay);

    return message_holder;
}

export default show_message;