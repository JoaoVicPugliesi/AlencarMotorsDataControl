function toggle_input_visibility () {
    const cards = document.querySelectorAll('.card');
    cards.forEach((c) => {
        const input = c.querySelector('.card-main-confirm-input input');
        const btn = c.querySelector('.card-main-confirm-input-visibility-btn');
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

export default toggle_input_visibility;