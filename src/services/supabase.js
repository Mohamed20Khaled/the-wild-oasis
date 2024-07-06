import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fteqkvgmaubgzbjecixs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0ZXFrdmdtYXViZ3piamVjaXhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwMjg2OTUsImV4cCI6MjAzNTYwNDY5NX0.lVW_ylaMyMJhU_tMBqHweXiohQTY07kmJkCWAFKY284";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
