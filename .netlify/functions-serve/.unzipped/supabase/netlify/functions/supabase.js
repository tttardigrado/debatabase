const { createClient } = require("@supabase/supabase-js")

// --------- SupaBase Config ---------
const sbKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxcmNta3FnenB2dHJqcnlma3h0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTAxMjE0NCwiZXhwIjoxOTk0NTg4MTQ0fQ.8usx3fDoHM99aI_w83jMgWgBtnQf4g-2Zcd0eM15RCE"
const sbUrl = "https://vqrcmkqgzpvtrjryfkxt.supabase.co"

exports.supabase = createClient(sbUrl, sbKey)

// -------- Helper  Functions --------

// Get a random element from an array
exports.get_random = (list) => {
    return list[Math.floor((Math.random()*list.length))];
}