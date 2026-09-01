function toggle_input_visibility (class_name) {
    const cards = document.querySelectorAll(`.${class_name}`);
    cards.forEach((c) => {
        const input = c.querySelector(`.${class_name}-main-confirm-input input`);
        const btn = c.querySelector(`.${class_name}-main-confirm-input-visibility-btn`);
        btn.addEventListener('click', () => {
            if(btn.classList.contains('visible')) {
                btn.classList.remove('visible');
                input.type = 'password';
                btn.innerHTML = '<i class="fa-solid fa-eye"></i>';
                return;
            }
            btn.classList.add('visible');
            input.type = 'text';
            btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        })
    });
}

function toggle_input_visibility_caller () {
    toggle_input_visibility('card');
    toggle_input_visibility('admin-card');
}

export default toggle_input_visibility_caller;