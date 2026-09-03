function admin_component(id, name, image) {
    return `
        <div class="admin">
            <div class="admin-main-confirm">
                <div class="admin-main-confirm-message">
                    <div class="admin-main-confirm-close">
                         <i class="fa-solid fa-arrow-left"></i>
                    </div>

                    <div>
                        <h3>Olá, ${name}</h3>
                    </div>

                    <div>
                        <p>Confirme sua identidade</p>
                    </div>
                </div>

                <div class="admin-main-confirm-input">
                    <input 
                        type="password" 
                        maxlength="255" 
                        placeholder="Sua Senha Aqui"
                    >

                    <div class="admin-main-confirm-input-visibility-btn">
                        <i class="fa-solid fa-eye"></i>
                    </div>
                </div>

                <div class="admin-main-confirm-btn" data-id="${id}">
                    <i class="fa-solid fa-check"></i>
                </div>
            </div>
            <div class="admin-img">
                <img 
                    src="images/employees/${image}.jpg" 
                    alt="" 
                    draggable="false"
                >
            </div>

            <div class="admin-name">
                <h3>${name}</h3>
            </div>

            <div class="admin-dashboard">
                <div class="admin-dashboard-add">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </div>
            </div>

        </div>
    `;
}

export default admin_component;