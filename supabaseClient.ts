// FIX: Manually define the type for `import.meta.env` to resolve TypeScript errors.
// This is necessary because the default Vite client types are not being picked up.
interface ImportMeta {
  readonly env: {
    readonly VITE_SUPABASE_URL: string;
    readonly VITE_SUPABASE_ANON_KEY: string;
  };
}

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// The client is only created if the environment variables are provided.
// In App.tsx, we check if `supabase` is null to display a configuration message.
export const supabase = (supabaseUrl && supabaseAnonKey) 
    ? createClient(supabaseUrl, supabaseAnonKey) 
    : null;