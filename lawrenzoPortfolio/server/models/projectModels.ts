import { Pool } from 'pg';
import type { QueryResult } from 'pg';
import dotenv from 'dotenv';
// import { createClient } from '@supabase/supabase-js';

dotenv.config();

// const supabaseUrl = 'https://pwzpvjtknggovtxjoyip.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// console.log(supabaseKey);

const PG_URI = supabaseKey;
if (!PG_URI) {
  throw new Error('SUPABASE NOT CONNECTED');
}

const pool = new Pool({
  connectionString: PG_URI,
});

export default {
  query: (text: string, params?: any[]): Promise<QueryResult<any>> => {
    console.log('executed query: ', text);
    return pool.query(text, params);
  },
};
