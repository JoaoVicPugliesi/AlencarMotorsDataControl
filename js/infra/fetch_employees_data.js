async function fetch_employees_data(db) {
    const { data, error } = await db
        .from('employees')
        .select('*');

    if (error) {
        return [];
    }

    return data;
}

export default fetch_employees_data;