
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Using the provided Supabase credentials
const supabaseUrl = 'https://buulzqlehsesdyzyuyiy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1dWx6cWxlaHNlc2R5enl1eWl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3OTMyNzYsImV4cCI6MjA1NzM2OTI3Nn0.3DT8rjzk2hM3RuEwIHewk66vlBrplSEaKxbxpYTKZyk';

// Initialize the Supabase client
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to sign in with Google
export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/dashboard`,
    }
  });
  
  return { data, error };
};

// Helper function to get the current user
export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

// Helper function to sign out
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};
