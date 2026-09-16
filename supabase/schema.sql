-- ============================================================================
-- HCLICKS PHOTOGRAPHY & FILMS — SUPABASE DATABASE MIGRATION SCRIPT
-- ============================================================================
-- How to use:
-- 1. Create or log into your Supabase project (https://supabase.com).
-- 2. Click "SQL Editor" in the left sidebar.
-- 3. Paste this script and click "Run".
-- 4. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.
-- ============================================================================

-- Table definition for HClicks Photography Inquiries
CREATE TABLE IF NOT EXISTS public.hclicks_inquiries (
  id TEXT PRIMARY KEY,
  ref_code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  event_type TEXT,
  event_date TEXT,
  location TEXT,
  region TEXT DEFAULT 'USA',
  budget TEXT,
  guest_count TEXT,
  coverage TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'PENDING'
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.hclicks_inquiries ENABLE ROW LEVEL SECURITY;

-- Security Policies: Allow public inserts and reads
CREATE POLICY "Allow public inserts" ON public.hclicks_inquiries
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public reads" ON public.hclicks_inquiries
  FOR SELECT USING (true);

CREATE POLICY "Allow updates" ON public.hclicks_inquiries
  FOR UPDATE USING (true);

CREATE POLICY "Allow delete" ON public.hclicks_inquiries
  FOR DELETE USING (true);

-- Performance Indexes
CREATE INDEX IF NOT EXISTS idx_hclicks_inquiries_status ON public.hclicks_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_hclicks_inquiries_region ON public.hclicks_inquiries(region);
CREATE INDEX IF NOT EXISTS idx_hclicks_inquiries_created_at ON public.hclicks_inquiries(created_at DESC);
