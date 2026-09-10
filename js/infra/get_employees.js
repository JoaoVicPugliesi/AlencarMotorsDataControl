async function get_employees(db) {
    const { data, error } = await db
        .from('employees')
        .select('*');

    if (error) {
        return [];
    }

    return data;
}

export default get_employees;