// The triple-slash directive `/// <reference types="vite/client" />` was failing because the
// type definition file could not be located, likely due to a project configuration issue.
// To resolve the errors with `import.meta.env`, its type is defined manually here.
declare global {
  interface ImportMeta {
    readonly env: {
      readonly VITE_SUPABASE_URL: string;
      readonly VITE_SUPABASE_ANON_KEY: string;
    };
  }
}

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// The client is only created if the environment variables are provided.
// In App.tsx, we check if `supabase` is null to display a configuration message.
export const supabase = (supabaseUrl && supabaseAnonKey) 
    ? createClient(supabaseUrl, supabaseAnonKey) 
    : null;