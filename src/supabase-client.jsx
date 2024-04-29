import { createClient } from "@supabase/supabase-js";

export const supabase = createClient("http://copiwin.com:8000","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzEzMzA0ODAwLAogICJleHAiOiAxODcxMDcxMjAwCn0.wzm6GJDkA5uIKsaUcZPHG2mm-lCDIHCaFX1GiWlXDtQ")
