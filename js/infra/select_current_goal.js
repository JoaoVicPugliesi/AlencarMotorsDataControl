async function select_current_goal(db) {
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

export default select_current_goal;