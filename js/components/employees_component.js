function employees_component(id, name, image) {
    return `
        <div class="card">
            <div class="card-main-confirm">
                <div class="card-main-confirm-message">
                    <div class="card-main-confirm-close">
                         <i class="fa-solid fa-arrow-left"></i>
                    </div>

                    <div>
                        <h3>Olá, ${name}</h3>
                    </div>

                    <div>
                        <p>Confirme sua identidade</p>
                    </div>
                </div>

                <div class="card-main-confirm-input">
                    <input 
                        type="password" 
                        maxlength="255" 
                        placeholder="Sua Senha Aqui"
                    >

                    <div class="card-main-confirm-input-visibility-btn">
                        <i class="fa-solid fa-eye"></i>
                    </div>
                </div>

                <div class="card-main-confirm-btn" data-id="${id}">
                    <i class="fa-solid fa-check"></i>
                </div>
            </div>
            <div class="card-img">
                <img 
                    src="images/employees/${image}.jpg" 
                    alt="" 
                    draggable="false"
                >
            </div>

            <div class="card-name">
                <h3>${name}</h3>
            </div>

            <div class="card-dashboard">
                <div class="card-dashboard-add">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </div>
            </div>

        </div>
    `;
}

export default employees_component;