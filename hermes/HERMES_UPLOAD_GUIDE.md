# Hermes Upload Guide

Dokumen ini menjelaskan file apa saja yang perlu di-upload ke Hermes agar bisa menjawab pertanyaan seputar layanan robotik CIS dan mengarahkan user ke halaman website yang relevan.

## File Wajib

1. `KNOWLEDGE.md`
   Sumber pengetahuan utama untuk topik robotik, use case, solution stack, dan business value.

2. `hermes/HERMES_SYSTEM_PROMPT.md`
   Aturan jawaban Hermes agar tetap singkat, korporat, dan selalu mengarahkan ke halaman CIS yang sesuai.

3. `hermes/HERMES_URL_MAP.md`
   Daftar URL publik yang harus dipakai Hermes saat memberi rujukan link.

4. `hermes/HERMES_INTENT_MAP.md`
   Peta intent dan keyword agar Hermes memilih slug detail yang paling spesifik, termasuk mapping `health` ke halaman robotik healthcare.

## File Opsional

1. `AGENTS.md`
   Dipakai hanya jika Hermes perlu memahami gaya komunikasi, batasan kerja, dan konteks proyek CIS.

2. `README.md`
   Dipakai hanya jika Hermes juga perlu konteks teknis proyek web.

## Yang Tidak Perlu Di-upload ke Hermes

- Folder `web/`
- Folder `ciscorp.online/`
- File build seperti `dist/`
- File sementara `.tmp_*`
- File ZIP
- PDF sumber mentah jika isi pentingnya sudah diringkas di `KNOWLEDGE.md`

## Urutan Upload yang Disarankan

1. Upload `KNOWLEDGE.md`
2. Upload `hermes/HERMES_URL_MAP.md`
3. Upload `hermes/HERMES_SYSTEM_PROMPT.md`
4. Upload `hermes/HERMES_INTENT_MAP.md`
5. Jika perlu, tambahkan `AGENTS.md` sebagai konteks tambahan

## Catatan Deploy

- Setelah website live di Hostinger, pastikan semua URL pada `hermes/HERMES_URL_MAP.md` benar-benar bisa diakses publik.
- Jika slug berubah, update `HERMES_URL_MAP.md` lebih dulu agar Hermes tidak memberi link mati.
- Karena routing saat ini memakai hash, format link publik mengikuti pola `https://ciscorp.co.id/#/robotics/...`
