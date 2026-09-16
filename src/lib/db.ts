import { createClient, SupabaseClient } from "@supabase/supabase-js";

/* ============================================================================
   1. TYPES & TABLE CONFIGURATION
   ============================================================================ */

export interface Inquiry {
  id: string;
  refCode: string;
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  region: "USA" | "HYDERABAD";
  budget: string;
  guestCount: string;
  coverage: string;
  message: string;
  createdAt: string;
  status: "PENDING" | "CONFIRMED" | "ARCHIVED";
}

/**
 * Multi-Tenant Table Configuration
 * You can share one Supabase project across multiple clients by setting different
 * table names in .env.local (e.g. SUPABASE_INQUIRIES_TABLE="client2_inquiries").
 */
export const TABLE_NAME =
  process.env.SUPABASE_INQUIRIES_TABLE || "hclicks_inquiries";

/* ============================================================================
   2. EMBEDDED SQL MIGRATION SCRIPT (For Supabase SQL Editor)
   ============================================================================ */

export const SQL_SCHEMA_SCRIPT = `
-- ============================================================================
-- HCLICKS & MULTI-TENANT SUPABASE SQL MIGRATION
-- Paste this script into your Supabase SQL Editor to create the bookings table.
-- ============================================================================

CREATE TABLE IF NOT EXISTS public.${TABLE_NAME} (
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
ALTER TABLE public.${TABLE_NAME} ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous users to insert booking inquiries
CREATE POLICY "Allow public inserts" ON public.${TABLE_NAME}
  FOR INSERT WITH CHECK (true);

-- Allow public reads or service role full access
CREATE POLICY "Allow public reads" ON public.${TABLE_NAME}
  FOR SELECT USING (true);

-- Allow updates (e.g., status changes)
CREATE POLICY "Allow updates" ON public.${TABLE_NAME}
  FOR UPDATE USING (true);

-- Allow deletion
CREATE POLICY "Allow delete" ON public.${TABLE_NAME}
  FOR DELETE USING (true);

-- Index for fast queries by status and region
CREATE INDEX IF NOT EXISTS idx_${TABLE_NAME}_status ON public.${TABLE_NAME}(status);
CREATE INDEX IF NOT EXISTS idx_${TABLE_NAME}_region ON public.${TABLE_NAME}(region);
`;

/* ============================================================================
   3. SUPABASE CLIENT INITIALIZATION WITH LOCAL FALLBACK
   ============================================================================ */

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);

let supabaseClient: SupabaseClient | null = null;
if (isSupabaseConfigured && supabaseUrl && supabaseKey) {
  supabaseClient = createClient(supabaseUrl, supabaseKey);
}

/* ============================================================================
   4. LOCAL IN-MEMORY STORE FALLBACK (Active when Supabase keys are missing)
   ============================================================================ */

const initialSeedInquiries: Inquiry[] = [
  {
    id: "inq-1",
    refCode: "HC-2026-9812",
    name: "Ananya Sharma & Vikram Roy",
    email: "ananya.sharma@example.com",
    phone: "+1 (312) 555-0194",
    eventType: "Falaknuma Palace Royal Wedding",
    eventDate: "2026-11-18",
    location: "Hyderabad, India",
    region: "HYDERABAD",
    budget: "$25,000 - $40,000",
    guestCount: "450 Guests",
    coverage: "3-Day Cinema & Photo Package",
    message:
      "We love your editorial 8K showreels. Looking for complete multi-day coverage including Sangeet and reception.",
    createdAt: "2026-09-15T14:30:00Z",
    status: "PENDING",
  },
  {
    id: "inq-2",
    refCode: "HC-2026-8410",
    name: "Sophia Martinez & David Miller",
    email: "sophia.m@example.com",
    phone: "+1 (847) 555-0812",
    eventType: "Lake Michigan Twilight Wedding",
    eventDate: "2026-10-04",
    location: "Chicago, IL",
    region: "USA",
    budget: "$15,000 - $25,000",
    guestCount: "200 Guests",
    coverage: "Full Day Photography & Highlight Film",
    message:
      "Seeking high-end editorial portraits on the skyline and ceremony coverage.",
    createdAt: "2026-09-14T09:15:00Z",
    status: "CONFIRMED",
  },
  {
    id: "inq-3",
    refCode: "HC-2026-7291",
    name: "Priya Patel & Rohan Mehta",
    email: "priya.patel@example.com",
    phone: "+1 (309) 555-0431",
    eventType: "Autumn Estate Pre-Wedding Shoot",
    eventDate: "2026-09-28",
    location: "Normal, IL",
    region: "USA",
    budget: "$8,000 - $15,000",
    guestCount: "Intimate",
    coverage: "Editorial Portrait Session & 4K Reel",
    message: "Need outdoor autumn prairie portraits and cinematic slow-motion clips.",
    createdAt: "2026-09-12T18:45:00Z",
    status: "PENDING",
  },
];

const globalForInquiries = globalThis as unknown as {
  localInquiriesStore: Inquiry[];
};

export const localInquiriesStore =
  globalForInquiries.localInquiriesStore || [...initialSeedInquiries];

if (process.env.NODE_ENV !== "production") {
  globalForInquiries.localInquiriesStore = localInquiriesStore;
}

/* ============================================================================
   5. UNIFIED DATA ACCESS METHODS (Auto-selects Supabase or Local Store)
   ============================================================================ */

/**
 * Fetch all inquiries sorted by creation date
 */
export async function getInquiries(): Promise<Inquiry[]> {
  if (isSupabaseConfigured && supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from(TABLE_NAME)
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        return data.map((row) => ({
          id: row.id,
          refCode: row.ref_code,
          name: row.name,
          email: row.email,
          phone: row.phone || "",
          eventType: row.event_type || "",
          eventDate: row.event_date || "",
          location: row.location || "",
          region: (row.region as "USA" | "HYDERABAD") || "USA",
          budget: row.budget || "",
          guestCount: row.guest_count || "",
          coverage: row.coverage || "",
          message: row.message || "",
          createdAt: row.created_at,
          status: (row.status as "PENDING" | "CONFIRMED" | "ARCHIVED") || "PENDING",
        }));
      }
    } catch (err) {
      console.warn("Supabase fetch error, falling back to local store:", err);
    }
  }

  // Fallback: Local in-memory store
  return [...localInquiriesStore].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

/**
 * Create a new inquiry with unique reference code
 */
export async function addInquiry(
  input: Omit<Inquiry, "id" | "refCode" | "createdAt" | "status">
): Promise<Inquiry> {
  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  const refCode = `HC-2026-${randomDigits}`;
  const id = `inq-${Date.now()}`;
  const createdAt = new Date().toISOString();

  const newInquiry: Inquiry = {
    ...input,
    id,
    refCode,
    createdAt,
    status: "PENDING",
  };

  if (isSupabaseConfigured && supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from(TABLE_NAME)
        .insert([
          {
            id: newInquiry.id,
            ref_code: newInquiry.refCode,
            name: newInquiry.name,
            email: newInquiry.email,
            phone: newInquiry.phone,
            event_type: newInquiry.eventType,
            event_date: newInquiry.eventDate,
            location: newInquiry.location,
            region: newInquiry.region,
            budget: newInquiry.budget,
            guest_count: newInquiry.guestCount,
            coverage: newInquiry.coverage,
            message: newInquiry.message,
            created_at: newInquiry.createdAt,
            status: newInquiry.status,
          },
        ])
        .select()
        .single();

      if (!error && data) {
        return newInquiry;
      }
    } catch (err) {
      console.warn("Supabase insert error, saving to local store:", err);
    }
  }

  // Fallback: Local in-memory store
  localInquiriesStore.unshift(newInquiry);
  return newInquiry;
}

/**
 * Update an inquiry's status (PENDING, CONFIRMED, ARCHIVED)
 */
export async function updateInquiryStatus(
  id: string,
  status: "PENDING" | "CONFIRMED" | "ARCHIVED"
): Promise<Inquiry | null> {
  if (isSupabaseConfigured && supabaseClient) {
    try {
      const { error } = await supabaseClient
        .from(TABLE_NAME)
        .update({ status })
        .eq("id", id);

      if (!error) {
        const all = await getInquiries();
        return all.find((i) => i.id === id) || null;
      }
    } catch (err) {
      console.warn("Supabase update error, applying locally:", err);
    }
  }

  // Fallback: Local store
  const item = localInquiriesStore.find((i) => i.id === id);
  if (item) {
    item.status = status;
    return item;
  }
  return null;
}

/**
 * Delete an inquiry
 */
export async function deleteInquiry(id: string): Promise<boolean> {
  if (isSupabaseConfigured && supabaseClient) {
    try {
      const { error } = await supabaseClient
        .from(TABLE_NAME)
        .delete()
        .eq("id", id);

      if (!error) return true;
    } catch (err) {
      console.warn("Supabase delete error, removing locally:", err);
    }
  }

  // Fallback: Local store
  const index = localInquiriesStore.findIndex((i) => i.id === id);
  if (index !== -1) {
    localInquiriesStore.splice(index, 1);
    return true;
  }
  return false;
}
