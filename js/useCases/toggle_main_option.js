function toggle_main_options() {

    const buttons = document.querySelectorAll('.card-main-option-btn');

    buttons.forEach((button) => {

        button.addEventListener('click', () => {

            const option = button.closest('.card-main-option');
            const code = button.dataset.code;

            let chosen_counters = JSON.parse(
                localStorage.getItem('chosen_counters')
            ) || [];

            const index = chosen_counters.indexOf(code);

            if (index !== -1) {
                chosen_counters.splice(index, 1);
                option.classList.remove('clicked');
            } else {
                chosen_counters.push(code);
                option.classList.add('clicked');
            }

            localStorage.setItem(
                'chosen_counters',
                JSON.stringify(chosen_counters)
            );

            console.log(chosen_counters);
        });

    });
}

export default toggle_main_options;