import { Pool } from 'pg';
import type { QueryResult } from 'pg';

import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://pwzpvjtknggovtxjoyip.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log(supabaseKey);

const PG_URI = '';
const pool = new Pool({
  connectionString: PG_URI,
});

export default {
  query: (text: string, params?: any[]): Promise<QueryResult<any>> => {
    console.log('executed query', text);
    return pool.query(text, params);
  },
};
