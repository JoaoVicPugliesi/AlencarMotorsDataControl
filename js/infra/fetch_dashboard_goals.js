async function fetch_dashboard_goals(db) {
    const { data, error } = await db
        .from('dashboard_goals')
        .select('*')
        .order('id', { ascending: false })
        .limit(1)
        .single();

    if (error) {
        console.error(error);
        return null;
    }

    return data;
}

export default fetch_dashboard_goals;