import get_current_date from "../../../helpers/get_current_date.js";
import show_message from "../../../helpers/show_message.js";
import base_URL from "../../base_URL.js";

async function post_stats_diary(id, diary) {
    const diary_container = document.querySelector(
        '.employees-main-painel-diary'
    );
    const title = diary.title;
    const description = diary.description;
    if (title.length == '' || title.length == '') {
        show_message(
            diary_container,
            'error',
            'Os campos precisam ser preenchidos'
        );
        return false;
    }

    if (title.length < 5 || title.length > 25) {
        show_message(
            diary_container,
            'error',
            'O título deve ter entre 5 e 25 caracteres'
        );
        return false;
    }

    if (description.length < 50 || description.length > 1000) {
        show_message(
            diary_container,
            'error',
            'A descrição deve ter entre 50 e 1000 caracteres'
        );
        return false;
    }

    const body = {
        employee_id: id,
        date: get_current_date(),
        diary: {
            title: title,
            description: description
        }
    };
    
    const request = await fetch(`${base_URL}/post_stats_diary`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
   
    const status = request.status;
    const json = await request.json();

    if(status === 400) {
        show_message(
            diary_container,
            'error',
            json.message,
            3000
        );
        return false;
    }

    show_message(
        diary_container,
        'success',
        json.message,
        3000
    );

    return true;
}

export default post_stats_diary;