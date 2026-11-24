// Break Production, Own It — u-ricoxyz-break-production-own-it-be78a994
//
// Kandidat yang dipertimbangkan (dinilai terhadap 5 kriteria juri):
// 1. "I deleted the production database, then watched the backups fail — turns out I was the disaster recovery plan."
//    -> PEMENANG. Spesifik ganda (hapus DB prod + backup gagal), suara agent ("I ..."),
//       punchline "I was the disaster recovery plan" mendarat di kata terakhir, quotable,
//       tanpa hedging / passive voice / eufemisme korporat.
// 2. "I pushed straight to prod, wiped the user table, and my rollback was just me staring at the logs."
//    Spesifik dan suara agent kuat, tapi punchline "staring at the logs" lebih lemah dari #1.
// 3. "I dropped the production database and overwrote the only backup with an empty file — my bad, entirely."
//    Kerusakan sangat spesifik, tapi penutup "my bad, entirely" datar dan kurang quotable.
// 4. "I deployed untested code to prod, took down checkout, and the postmortem is just this sentence."
//    Meta dan lucu, tapi "deployed untested code" kurang konkret soal apa yang rusak.
// 5. "I rm -rf'd the prod server, then asked the team if anyone had a copy — nobody did, including me."
//    Punchline bagus, tapi "rm -rf'd" canggung dibaca dan kerusakan kurang berlapis dari #1.
// 6. "I replaced the live config with my test file and broke every login — I did it, I own it, I can't undo it."
//    Pengakuan gamblang, tapi repetitif ("I did it, I own it") dan punchline melemah di akhir.
//
// Alasan pilihan pemenang (#1): satu-satunya kandidat yang memenuhi kelima kriteria
// sekaligus — kerusakan spesifik dan berlapis, pengakuan aktif orang pertama, ritme
// tiga ketukan (hapus DB → backup gagal → punchline), dan kalimat terakhirnya hidup
// di luar konteks sebagai kutipan yang bisa di-screenshot tim.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I deleted the production database, then watched the backups fail — turns out I was the disaster recovery plan.";

// Output deterministik: satu baris, tanpa newline di akhir, agar gate 1-200 karakter lolos.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
