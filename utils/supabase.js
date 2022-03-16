import { createClient } from '@supabase/supabase-js'

// export default createClient('url', 'api_key');
   // DONT use NEXT_PUBLIC for something that needs to stay secret
   // This will be exposed in the bundle?
export default createClient(
   process.env.NEXT_PUBLIC_SUPABASE_URL, 
   process.env.NEXT_PUBLIC_SUPABASE_API_KEY
);