import show_message from "../helpers/show_message.js";

async function save_daily_diary(id, db, diary) {
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

    const data = {
        employee_id: id,
        date: new Intl.DateTimeFormat('en-CA', {
            timeZone: 'America/Sao_Paulo'
        }).format(new Date())
    };

    const { data: result, error } = await db
        .from('employee_daily_stats')
        .upsert(
            {
                ...data,
                diary: {
                    title,
                    description
                }
            },
            {
                onConflict: 'employee_id,date'
            }
        )
        .select();

    if (error) {
        show_message(
            diary_container,
            'error',
            'Falhou em atualizar o diário'
        );

        return false;
    }

    show_message(
        diary_container,
        'success',
        'Diário atualizado'
    );

    return result;
}

export default save_daily_diary;