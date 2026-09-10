async function get_goal(db) {
    const { data, error } = await db
        .from('goals')
        .select('*')
        .order('id', { ascending: false })
        .limit(1)
        .single();

    if (error) {
        return false;
    }

    return data;
}

export default get_goal;