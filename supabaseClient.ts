// FIX: The manual type definition for `import.meta.env` was incorrect.
// Replaced with a triple-slash directive to load Vite's client types,
// which correctly define `import.meta.env` for TypeScript.
/// <reference types="vite/client" />

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// The client is only created if the environment variables are provided.
// In App.tsx, we check if `supabase` is null to display a configuration message.
export const supabase = (supabaseUrl && supabaseAnonKey) 
    ? createClient(supabaseUrl, supabaseAnonKey) 
    : null;