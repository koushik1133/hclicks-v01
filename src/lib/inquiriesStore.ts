/**
 * Centralized Delegation Wrapper
 * All database operations are consolidated in src/lib/db.ts for easy migration
 * to Supabase or dedicated client databases.
 */

export type { Inquiry } from "./db";
export {
  TABLE_NAME,
  SQL_SCHEMA_SCRIPT,
  isSupabaseConfigured,
  getInquiries,
  addInquiry,
  updateInquiryStatus,
  deleteInquiry,
} from "./db";
