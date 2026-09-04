function supabase_connect(supabase) {
    const supabase_url = 'https://lntwexedkbcrmayltrwo.supabase.co';
    const supabase_key = 'sb_publishable_tvJ9_vYavIo_-6sk_ncudQ_AhDelOGY';
    const db = supabase.createClient(supabase_url, supabase_key);
    return db;
}

export default supabase_connect;