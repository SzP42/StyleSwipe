import { createClient } from '@supabase/supabase-js'
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zcXFmZW16dXRhb3dma2pseW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzMzkyMTcsImV4cCI6MjAzMDkxNTIxN30.AkhcJ04st3OQ7QYz7224YIcdZeynLYO6aKFPw_Jsasg" 
const SUPABASE_URL="https://osqqfemzutaowfkjlymx.supabase.co"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)