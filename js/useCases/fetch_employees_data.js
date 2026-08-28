async function fetch_employees_data(db) {
    const { data, error } = await db
        .from('employees')
        .select('*');

    if (error) {
        console.error('Error fetching employees:', error);
        return [];
    }

    console.log(data);
    return data;
}

export default fetch_employees_data;