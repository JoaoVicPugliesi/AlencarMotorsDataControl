import counters from "../../data/counters.js";
import data_numbers from "../../data/data_numbers.js";

function employees_component(id, name, image, post_counter, leads_counter, passantes_counter, leads_atendidos_counter, prospection_counter, spoken_prospection_counter, sales_counter, sales_in_negotiation_counter, cadastros_counter, simulation_counter) {
    const data = data_numbers(post_counter, leads_counter, passantes_counter, leads_atendidos_counter, prospection_counter, spoken_prospection_counter, sales_counter, sales_in_negotiation_counter, cadastros_counter, simulation_counter);
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
                    <button>Confirmar</button>
                </div>
            </div>

            <div class="card-main-options">

                <div class="card-main-options-menu">
                    <div class="card-main-options-menu-i">
                        <i class="fa-solid fa-arrow-left"></i>
                    </div>

                    <div>
                        <h3>Escolha a opção</h3>
                    </div>
                </div>

                <div class="card-main-options-display">
                    ${counters.map((c) => `
                            <div class="card-main-option">
                                <div class="card-main-option-title">
                                    <h3>${c.name}</h3>
                                </div>

                                <div class="card-main-option-quantity" data-code="${c.code}">
                                    <button type="button" class="qty-btn btn-minus" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
                                    <span class="qty-count">0</span>
                                    <button type="button" class="qty-btn btn-plus" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                        `).join('')
                    }
                </div>

                <div class="card-main-options-advance">
                    <button>
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>

            </div>
            <div class="card-main-data">
                <div class="card-main-data-menu">
                    <div class="card-main-data-menu-i">
                        <i class="fa-solid fa-arrow-left"></i>
                    </div>

                    <div>
                        <h3>Veja os dados</h3>
                    </div>
                </div>

                <div class="card-main-data-display">
                    ${data.map((d) => `
                            <div class="card-main-data-component">              
                                <div class="card-main-data-title">
                                    <h3>${d.name}</h3>
                                </div>

                                <div class="card-main-data-number">
                                    <h3>${d.number}</h3>
                                </div>
                            </div>
                        `).join('')
        }
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

            <div class="card-counter">
                <div class="card-counter-data">
                    <i class="fa-solid fa-list-ol"></i>
                </div>

                <div class="card-counter-add">
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>

        </div>
    `;
}

export default employees_component;