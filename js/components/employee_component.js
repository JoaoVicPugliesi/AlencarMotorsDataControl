function employee_component(id, name, image) {
    return `
        <div class="employee">
            <div class="employee-main-confirm">
                <div class="employee-main-confirm-message">
                    <div class="employee-main-confirm-close">
                         <i class="fa-solid fa-arrow-left"></i>
                    </div>

                    <div>
                        <h3>Olá, ${name}</h3>
                    </div>

                    <div>
                        <p>Confirme sua identidade</p>
                    </div>
                </div>

                <div class="employee-main-confirm-input">
                    <input 
                        type="password" 
                        maxlength="255" 
                        placeholder="Sua Senha Aqui"
                    >

                    <div class="employee-main-confirm-input-visibility-btn">
                        <i class="fa-solid fa-eye"></i>
                    </div>
                </div>

                <div class="employee-main-confirm-btn" data-id="${id}">
                    <i class="fa-solid fa-check"></i>
                </div>
            </div>
            <div class="employee-img">
                <img 
                    src="images/employees/${image}.jpg" 
                    alt="" 
                    draggable="false"
                >
            </div>

            <div class="employee-name">
                <h3>${name}</h3>
            </div>

            <div class="employee-dashboard">
                <div class="employee-dashboard-add">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </div>
            </div>

        </div>
    `;
}

export default employee_component;