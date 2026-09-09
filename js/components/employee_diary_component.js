function employee_diary_component(mode, date, diary) {
    let commands;
    const {
        title,
        description
    } = diary ?? {};
    const splited_reversed_formatted =
        date.split('-').reverse().join('-');
    if (mode === 'write') {
        commands = `
            <div class="diary-commands">
                <button class="diary-comeback-command">
                    VOLTAR
                </button>
                <button class="diary-save-command">
                    SALVAR
                </button>
            </div>
        `;
    }
    if (mode === 'read') {
        commands = `
            <div class="diary-commands">
                <button class="diary-comeback-command">
                    VOLTAR
                </button>
            </div>
        `;
    }
    return `
        <div class="diary-page">
            <div class="diary-header">
                <span class="diary-label">DIÁRIO</span>
                <span class="diary-date">
                    ${splited_reversed_formatted}
                </span>
            </div>
            <input
                class="employees-main-painel-diary-title"
                type="text"
                value="${title}"
            >
            <textarea
                class="employees-main-painel-diary-description"
                maxlength="1000"
            >${description}</textarea>
            ${commands}
        </div>
    `;
}

export default employee_diary_component;